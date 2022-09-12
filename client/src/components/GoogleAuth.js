import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_deocde from "jwt-decode";
import { useScript } from "../hooks/useScript";
import { signInAction, signOutAction } from "../actions";
import { _checkEmail } from "../helpers";

const GoogleAuth = ({
  signInAction,
  signOutAction,
  currentUser,
  isSignedIn,
}) => {
  const googlebuttonref = useRef();
  const navigate = useNavigate();

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "245855587855-8jc4p7l0qev9fjkeoijt3mh0o0b2agch.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  const onGoogleSignIn = async (user) => {
    let payload = jwt_deocde(user.credential);
    signInAction({
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      avatar: payload.picture,
    });
    if (!(await _checkEmail(payload.email))) {
      navigate("/register");
    } else {
      navigate("/feeds");
    }
  };

  const onGoogleSignOut = () => {
    signOutAction();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      {!isSignedIn && <div ref={googlebuttonref} className="text-lg"></div>}
      {isSignedIn && (
        <div
          className="flex justify-center align-center rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          onClick={onGoogleSignOut}
        >
          <img
            className="rounded-tl-md rounded-bl-md w-9"
            src={currentUser.avatar}
            alt="profile"
            data-id={currentUser.id}
          />
          <button className="px-2">Logout</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { signInAction, signOutAction })(
  GoogleAuth
);
