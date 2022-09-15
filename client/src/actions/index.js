import { SIGN_IN, SIGN_OUT, REG_REC, REG_APP, REG_CHK } from "./types";
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

export const checkRegistration = () => async (dispatch, getState) => {
  let checkEmail = false;
  if (getState().auth.currentUser) {
    checkEmail = await _checkEmail(getState().auth.currentUser.email);
  }
  dispatch({
    type: REG_CHK,
    payload: checkEmail ? true : false,
  });
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
