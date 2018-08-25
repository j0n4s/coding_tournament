import * as actions from 'front/utils/abstractReducer';

const checkPoint = (point = {}) => {
  return (dispatch) => {
    dispatch(actions.set('Maps/point', point));
  };
};

export {checkPoint};
