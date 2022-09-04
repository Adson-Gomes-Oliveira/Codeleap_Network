import { 
  CREATE_POST_TYPE,
  STORE_POST_INPUTS,
  TOGGLE_BUTTON_TYPE,
  TOGGLE_POPUP_TYPE,
  EDIT_POST_TYPE,
  DELETE_POST_TYPE,
  CLEAR_TEMP_TYPE
} from "../../actions";

const INITIAL_STATE = {
  title: '',
  content: '',
  post: [{
    id: 1,
    title: 'Make your first post',
    content: `Just tell us what is in your heart or mind,
    on the console above you can create posts by choose a Title,
    write some content and click on create.`,
    datetime: 0,
    username: 'root',
  }],
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
      return {
        ...state,
        post: [
          ...state.post,
          {
            ...action.post,
            id: state.post[state.post.length - 1].id + 1,
          }
        ],
      }
    }
    case EDIT_POST_TYPE: {
      const postTarget = state.post.findIndex((post) => post.id === action.post.id);

      return {
        ...state,
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
      const postTarget = state.post.findIndex((post) => post.id === action.postDelete);

      return {
        ...state,
        post: [...state.post.slice(0, postTarget)],
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
    case CLEAR_TEMP_TYPE: {
      return {
        ...state,
        title: '',
        content: '',
      }
    }
    default:
      return state;
  }
}

export default homepageReducer;
