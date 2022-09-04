import { 
  CREATE_POST_TYPE,
  STORE_POST_INPUTS,
  TOGGLE_BUTTON_TYPE,
  TOGGLE_POPUP_TYPE,
  EDIT_POST_TYPE,
  DELETE_POST_TYPE,
} from "../../actions";

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
    case CREATE_POST_TYPE: {
      let idPost = 1;
      if (state.post[0]) {
        idPost = state.post[0].id + 1
      }

      return {
        ...state,
        title: '',
        content: '',
        post: [
          ...state.post,
          {
            ...action.post,
            id: idPost,
          }
        ],
      }
    }
    case EDIT_POST_TYPE: {
      const postTarget = state.post.findIndex((post) => post.id === action.post.id);

      return {
        ...state,
        title: '',
        content: '',
        post: [...state.post.slice(0, postTarget), action.post, ...state.post.slice(postTarget + 1)],
        postEdit: 0,
        isPopupActive: {
          ...state.isPopupActive,
          switch: false,
          editMode: false,
        }
      }
    }
    case DELETE_POST_TYPE: {
      const postArr = state.post.filter((post) => post.id !== action.postDelete);

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
