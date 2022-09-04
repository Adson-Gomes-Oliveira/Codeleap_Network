import { storeUserInput } from './userAction';
import { createPost, storePostInputs, editPost, deletePost } from './postAction';

export const CREATE_USER_TYPE = 'CREATE_USER';
export const TOGGLE_BUTTON_TYPE = 'TOGGLE_BUTTON';
export const TOGGLE_POPUP_TYPE = 'TOGGLE_POPUP';
export const STORE_USER_INPUTS = 'STORE_USER';
export const STORE_POST_INPUTS = 'STORE_POST';
export const CREATE_POST_TYPE = 'CREATE_POST';
export const EDIT_POST_TYPE = 'EDIT_POST';
export const DELETE_POST_TYPE = 'DELETE_POST';
export const CLEAR_TEMP_TYPE = 'CLEAR_TEMP';

const toggleButton = (isButtonDisabled) => {
  return {
    type: TOGGLE_BUTTON_TYPE,
    isButtonDisabled,
  }
};

export const togglePopup = (popupMode, toggle, idEdit) => {
  const mode = {
    switch: false,
    editMode: false,
    deleteMode: false,
    unvalidUserMode: false,
  }

  mode[popupMode] = true;

  if (toggle) mode.switch = true;
  if (!toggle) mode.switch = false;

  return {
    type: TOGGLE_POPUP_TYPE,
    isPopupActive: mode,
    idEdit,
  }
}

const actions = {
  togglePopup,
  toggleButton,
  userAction: { storeUserInput },
  postAction: { createPost, storePostInputs, editPost, deletePost },
}

export default actions;