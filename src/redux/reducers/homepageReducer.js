import { CREATE_POST_TYPE, STORE_POST_INPUTS, TOGGLE_BUTTON_TYPE } from "../../actions";

const INITIAL_STATE = {
  title: '',
  content: '',
  post: [],
  isButtonDisabled: true,
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
          action.post,
        ],
      }
    }
    case TOGGLE_BUTTON_TYPE: {
      return {
        ...state,
        isButtonDisabled: action.isButtonDisabled,
      }
    }
    default:
      return state;
  }
}

export default homepageReducer;
