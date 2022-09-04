import { combineReducers } from 'redux';

import signUpReducer from './signUpReducer';
import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  signUpReducer,
  homepageReducer,
});

export default rootReducer;
