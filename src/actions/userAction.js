export const STORE_USER_INPUTS = 'STORE_USER';

export const storeUserInput = (user) => {
  return {
    type: STORE_USER_INPUTS,
    user,
  }
};
