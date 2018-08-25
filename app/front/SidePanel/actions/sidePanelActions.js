import * as actions from 'front/utils/abstractReducer';

const sidePanelManage = (open = false) => {
  return (dispatch) => {
    dispatch(actions.set('SidePanel/show', {open}));
  };
};

export {sidePanelManage};
