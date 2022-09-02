import { CREATE_USER_TYPE } from '../../actions/index';

const INITIAL_STATE = {
  username: {},
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_TYPE: {
      return {
        ...state,
        user: action.user,
      }
    }
    default:
      return state;
  }
};

export default signUpReducer;
