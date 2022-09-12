import { SIGN_IN, SIGN_OUT, REG_REC, REG_APP } from "./types";
import workhunt from "../apis/workhunt";
import { _checkEmail } from "../helpers";

export const signInAction = (currentUser) => {
  return {
    type: SIGN_IN,
    payload: currentUser,
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};

export const registerRecruiter = (userData) => async (dispatch, getState) => {
  const checkEmail = await _checkEmail(userData.email);
  if (checkEmail) {
    console.log("User Already Exists");
  } else {
    const recruiterId = getState().auth.currentUser.id;
    const response = await workhunt.post("/recruiters", {
      ...userData,
      recruiterId,
    });
    dispatch({
      type: REG_REC,
      payload: response.data,
      recruiterId,
    });
  }
};

export const registerApplicant = (userData) => {
  return {
    type: REG_APP,
    payload: userData,
  };
};
