import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INIT_STATE = {
  isSignedIn: false,
  currentUser: null,
};

export default function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, currentUser: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, currentUser: null };
    default:
      return state;
  }
}
