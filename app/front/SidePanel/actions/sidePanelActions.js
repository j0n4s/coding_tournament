import * as actions from 'front/utils/abstractReducer';

const sidePanelManage = () => {
  return (dispatch) => {
    dispatch(actions.set('SidePanel/sidebarOpen', false));
  };
};

export {sidePanelManage};
