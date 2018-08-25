import * as actions from 'front/utils/abstractReducer';

const checkPoint = (position = {}) => {
  return (dispatch) => {
    dispatch(actions.set('maps/position', position));
  };
};

export {checkPoint};
