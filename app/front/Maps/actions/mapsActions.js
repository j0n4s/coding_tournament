import * as actions from 'front/utils/abstractReducer';

const checkPoint = (position = {}) => {
  return (dispatch) => {
    console.log('TO DESPIACH position: ', position);
    dispatch(actions.set('maps/position', position));
  };
};

export {checkPoint};
