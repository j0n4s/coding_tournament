import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';
import maps from 'front/Maps/reducers';
import sidePanel from 'front/sidePanel/reducers';

export default combineReducers({
  user: abstractReducer('auth/user', {}),
  maps,
  sidePanel
});
