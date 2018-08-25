import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';

export default combineReducers({
  show: abstractReducer('SidePanel/show', {})
});
