import { CREATE_POST_TYPE, STORE_POST_INPUTS, TOGGLE_BUTTON_TYPE, TOGGLE_POPUP_TYPE } from "../../actions";

const INITIAL_STATE = {
  title: '',
  content: '',
  post: [{
    id: 1,
    title: 'Make your first post',
    content: `Just tell us what is in your heart or mind,
    on the console above you can create posts by choose a Title,
    write some content and click on create.`,
    datetime: null,
    username: 'root',
  }],
  isButtonDisabled: true,
  isPopupActive: {
    switch: true,
    editMode: true,
    deleteMode: false,
    unvalidUserMode: false,
  },
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
    case TOGGLE_BUTTON_TYPE: {
      return {
        ...state,
        isButtonDisabled: action.isButtonDisabled,
      }
    }
    case TOGGLE_POPUP_TYPE: {
      return {
        ...state,
        isPopupActive: action.isPopupActive,
      }
    }
    default:
      return state;
  }
}

export default homepageReducer;
