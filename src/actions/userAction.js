import { STORE_USER_INPUTS } from ".";

export const storeUserInput = (user) => {
  return {
    type: STORE_USER_INPUTS,
    user,
  }
};
