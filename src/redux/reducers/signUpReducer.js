import { TOGGLE_BUTTON_TYPE } from '../../actions/index';
import { STORE_USER_INPUTS } from '../../actions/userAction';

const INITIAL_STATE = {
  user: '',
  isButtonDisabled: true,
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_INPUTS: {
      return {
        ...state,
        user: action.user,
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
};

export default signUpReducer;
