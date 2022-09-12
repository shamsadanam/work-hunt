import { REG_REC } from "../actions/types";

export default function registerRecrutierReducer(state = {}, action) {
  switch (action.type) {
    case REG_REC:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
