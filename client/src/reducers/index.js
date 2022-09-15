import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerRecruiterReducer from "./registerRecruiterReducer";
import { registrationCheckReducer } from "./registrationCheckReducer";

export default combineReducers({
  auth: authReducer,
  recruiters: registerRecruiterReducer,
  isRegistered: registrationCheckReducer,
});
