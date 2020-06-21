import { authActionTypes } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case authActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
