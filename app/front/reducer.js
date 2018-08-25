import {combineReducers} from 'redux';
import createReducer from 'front/BasicReducer';

export default combineReducers({
  user: createReducer('auth/user', {}),
});
