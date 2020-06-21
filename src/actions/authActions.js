import { authActionTypes } from "./types";

export const signIn = (userId) => {
  return {
    type: authActionTypes.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: authActionTypes.SIGN_OUT,
  };
};
