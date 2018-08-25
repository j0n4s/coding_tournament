import {combineReducers} from 'redux';
import abstractReducer from 'front/utils/abstractReducer';

export default combineReducers({
  points: abstractReducer('maps/points', {})
});
