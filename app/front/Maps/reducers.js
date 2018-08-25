import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';

export default combineReducers({
  event: abstractReducer('maps/event', {}),
  events: abstractReducer('maps/events', [])
});
