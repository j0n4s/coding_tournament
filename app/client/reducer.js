import {combineReducers} from 'redux';
import createReducer from 'client/BasicReducer';

export default combineReducers({
  user: createReducer('auth/user', {}),
});
