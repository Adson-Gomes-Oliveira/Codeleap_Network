import { CREATE_USER_TYPE, TOGGLE_BUTTON_TYPE } from ".";

export const createUser = (user) => {
  return {
    type: CREATE_USER_TYPE,
    user,
  }
};

export const toggleButton = (isDisabled) => {
  return {
    type: TOGGLE_BUTTON_TYPE,
    isDisabled,
  }
};