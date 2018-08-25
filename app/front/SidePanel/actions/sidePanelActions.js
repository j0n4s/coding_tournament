import * as actions from 'front/utils/abstractReducer';
import eventsApi from 'front/SidePanel/eventsApi';

const sidePanelManage = (open = false) => {
  return (dispatch) => {
    dispatch(actions.set('SidePanel/show', {open}));
  };
};

const eventsCreate = (event) => {
  return () => {
    eventsApi.create(event);
    /*.then((createdEvent) => {
      dispatch(actions.push('maps/events', createdEvent));
    });*/
  };
};

const eventsGet = () => {
  return (dispatch) => {
    return eventsApi.get()
    .then((events) => {
      dispatch(actions.set('maps/events', events));
    });
  };
};

export {sidePanelManage, eventsCreate, eventsGet};
