import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import auth from './auth';
import user from './user';

export default combineReducers({
  auth,
  user,
  toastr: toastrReducer,
});
