import { 
  TOGGLE_BUTTON_TYPE,
  TOGGLE_POPUP_TYPE,
} from "../../actions";

import {
  STORE_POST_INPUTS,
  RESPONSE_POST_GET_TYPE,
  RESPONSE_POST_CREATE_TYPE,
  RESPONSE_POST_EDIT_TYPE,
  RESPONSE_POST_DELETE_TYPE,
} from '../../actions/postAction';

const INITIAL_STATE = {
  title: '',
  content: '',
  post: [],
  isButtonDisabled: true,
  isPopupActive: {
    switch: false,
    editMode: false,
    deleteMode: false,
    unvalidUserMode: true,
  },
  postEdit: 0,
  postDelete: 0,
}

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STORE_POST_INPUTS: {
      return {
        ...state,
        title: action.title,
        content: action.content,
      }
    }
    case RESPONSE_POST_GET_TYPE: {
      console.log(action);
      return {
        ...state,
        post: [...action.postData.results],
      }
    }
    case RESPONSE_POST_CREATE_TYPE: {
      return {
        ...state,
        title: '',
        content: '',
        post: [...state.post, {
          content: action.postData.content,
          created_datetime: action.postData.created_datetime,
          id: action.postData.id,
          title: action.postData.title,
          username: action.postData.username,
        }],
      }
    }
    case RESPONSE_POST_EDIT_TYPE: {
      const postTarget = state.post.findIndex((post) => post.id === action.postData.id);

      return {
        ...state,
        title: '',
        content: '',
        post: [
          ...state.post.slice(0, postTarget),
          action.postData,
          ...state.post.slice(postTarget + 1)
        ],
        postEdit: 0,
        isPopupActive: {
          ...state.isPopupActive,
          switch: false,
          editMode: false,
        }
      }
    }
    case RESPONSE_POST_DELETE_TYPE: {
      const postArr = state.post.filter((post) => post.id !== action.postID);

      return {
        ...state,
        title: '',
        content: '',
        post: [...postArr],
        postDelete: 0,
        isPopupActive: {
          ...state.isPopupActive,
          switch: false,
          deleteMode: false,
        }
      }
    }
    case TOGGLE_BUTTON_TYPE: {
      return {
        ...state,
        isButtonDisabled: action.isButtonDisabled,
      }
    }
    case TOGGLE_POPUP_TYPE: {
      return {
        ...state,
        isPopupActive: { ...action.isPopupActive },
        postEdit: action.idEdit,
        postDelete: action.idEdit,
      }
    }
    default:
      return state;
  }
}

export default homepageReducer;
