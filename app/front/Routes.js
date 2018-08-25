import React from 'react';
import {Route} from 'react-router';
import App from 'front/App/App';
import Dashboard from 'front/Dashboard';

const getIndexRoute = (nextState, callBack) => {
  let indexRoute = {
    component: Dashboard,
    onEnter: (nxtState, replace) => {
      replace('/dashboard');
    }
  };
  
  callBack(null, indexRoute);
};

const routes =
  <Route getIndexRoute={getIndexRoute}>
    <Route path='login' component={Dashboard} />
    <Route path='dashboard' component={Dashboard} />
  </Route>
;

export default 
<Route path='/' component={App}>
  {routes}
  <Route path=':lang'>
    {routes}
  </Route>
</Route>;
