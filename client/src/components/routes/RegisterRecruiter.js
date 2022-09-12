import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../actions";
import { Formik, Form } from "formik";
import CustomInput from "../CustomInput";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const formBtnSubmit =
  "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900";

const RegisterRecruiter = ({ isSignedIn, currentUser, registerRecruiter }) => {
  const navigate = useNavigate();

  useEffect(() => {
    !isSignedIn && navigate("/");
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: currentUser.email,
          company: "",
          jobtitle: "",
          location: "",
          industrytype: "",
          companydescription: "",
        }}
        onSubmit={async (values, actions) => {
          await registerRecruiter(values);
          actions.resetForm();
          navigate("/feeds");
        }}
      >
        <Form className={formClasses}>
          <CustomInput
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          />
          <CustomInput
            label="Company"
            name="company"
            placeholder="Enter you company name"
          />
          <button type="submit" className={formBtnSubmit}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { registerRecruiter })(
  RegisterRecruiter
);
