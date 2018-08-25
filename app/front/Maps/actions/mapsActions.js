import * as actions from 'front/utils/abstractReducer';

const checkPoint = (event = {}) => {
  return (dispatch) => {
    dispatch(actions.set('maps/event', event));
  };
};

export {checkPoint};
