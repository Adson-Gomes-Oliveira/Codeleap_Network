export const CREATE_USER_TYPE = 'CREATE_USER';
export const TOGGLE_BUTTON_TYPE = 'TOGGLE_BUTTON';

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