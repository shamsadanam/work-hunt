import { REG_CHK } from "../actions/types";

export const registrationCheckReducer = (initState = false, action) => {
  switch (action.type) {
    case REG_CHK:
      return action.payload;
    default:
      return initState;
  }
};
