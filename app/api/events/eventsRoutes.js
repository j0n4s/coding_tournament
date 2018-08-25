import eventsModel from './eventsModel';
import abstractRoutes from 'api/utils/abstractRoutes';

export default app => {
  const routes = abstractRoutes(app, eventsModel, 'events');
  routes.setup({get: true, save: true});
};
