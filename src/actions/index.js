import { storeUserInput } from './userAction';
import { getPost, createPost, storePostInputs, editPost, deletePost } from './postAction';

export const TOGGLE_BUTTON_TYPE = 'TOGGLE_BUTTON';
export const TOGGLE_POPUP_TYPE = 'TOGGLE_POPUP';
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
};

const actions = {
  togglePopup,
  toggleButton,
  userAction: { storeUserInput },
  postAction: { getPost, createPost, storePostInputs, editPost, deletePost },
};

export default actions;