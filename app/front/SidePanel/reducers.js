import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';

export default combineReducers({
  sidebarOpen: abstractReducer('SidePanel/sidebarOpen', false)
});
