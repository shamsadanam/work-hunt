import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerRecruiterReducer from "./registerRecruiterReducer";

export default combineReducers({
  auth: authReducer,
  recruiters: registerRecruiterReducer,
});
