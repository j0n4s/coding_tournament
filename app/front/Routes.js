import React from 'react';
import {Route} from 'react-router';
import App from 'front/App/App';

const getIndexRoute = (nextState, callBack) => {
  let indexRoute = {
    component: App,
    onEnter: (nxtState, replace) => {
      replace('/index');
    }
  };
  
  callBack(null, indexRoute);
};

const routes =
  <Route getIndexRoute={getIndexRoute}>
    <Route path='index' component={App}/>
  </Route>
;

export default 
<Route path='/' component={App}>
  {routes}
  <Route path=':lang'>
    {routes}
  </Route>
</Route>;
