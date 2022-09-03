import { createUser } from './userAction';
import { createPost, storePostInputs } from './postAction';

export const CREATE_USER_TYPE = 'CREATE_USER';
export const TOGGLE_BUTTON_TYPE = 'TOGGLE_BUTTON';
export const STORE_POST_INPUTS = 'STORE_POST';
export const CREATE_POST_TYPE = 'CREATE_POST';

const toggleButton = (isButtonDisabled) => {
  return {
    type: TOGGLE_BUTTON_TYPE,
    isButtonDisabled,
  }
};

const actions = {
  toggleButton,
  userAction: { createUser },
  postAction: { createPost, storePostInputs },
}

export default actions;