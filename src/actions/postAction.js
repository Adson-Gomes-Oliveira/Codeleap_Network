import { CREATE_POST_TYPE, STORE_POST_INPUTS, TOGGLE_POPUP_TYPE, EDIT_POST_TYPE, DELETE_POST_TYPE } from ".";

export const storePostInputs = (input) => {
  console.log(input);
  return {
    type: STORE_POST_INPUTS,
    title: input.title,
    content: input.content,
  }
}

export const createPost = (postInfos) => {
  const { postData, datetime, username } = postInfos;
  return {
    type: CREATE_POST_TYPE,
    post: {
      ...postData,
      datetime,
      username,
    },
  }
}

export const editPost = (postInfos) => {
  const { postData, datetime, username } = postInfos;
  return {
    type: EDIT_POST_TYPE,
    post: {
      ...postData,
      datetime,
      username,
    },
  }
}

export const deletePost = (postDelete) => {
  return {
    type: DELETE_POST_TYPE,
    postDelete,
  }
}

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
