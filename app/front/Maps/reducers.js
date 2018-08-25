import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';

export default combineReducers({
  position: abstractReducer('maps/position', {}),
  events: abstractReducer('maps/events', [])
});
