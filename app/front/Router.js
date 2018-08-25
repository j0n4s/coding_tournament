import React from 'react';
import {match, RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';
import Routes from './Routes';
import store from './store';
import Helmet from 'react-helmet';

import Root from './App/Root';
import {Provider} from 'react-redux';

let assets = {};

function renderComponentWithRoot(Component, componentProps, initialData, user, isRedux = false) {
  let componentHtml;

  let initialStore = store({});

  if (isRedux) {
    initialStore = store(initialData);
  }

  global.window = {};

  try {
    componentHtml = renderToString(
      <Provider store={initialStore}>
        <Component {...componentProps} />
      </Provider>
    );
  } catch (e) {
    //console.trace(e); // eslint-disable-line
  }

  const head = Helmet.rewind();

  let reduxData = {};
  let data = initialData;

  if (isRedux) {
    reduxData = initialData;
    data = {};
  }

  return '<!doctype html>\n' + renderToString(
    <Root content={componentHtml} initialData={data} head={head} user={user} reduxData={reduxData} assets={assets}/>
  );
}

function handleRoute(res, renderProps, req) {
  function renderPage(initialData, isRedux) {
    try {
      const wholeHtml = renderComponentWithRoot(RouterContext, renderProps, initialData, req.user, isRedux);
      res.status(200).send(wholeHtml);
    } catch (error) {
      console.trace(error); // eslint-disable-line
    }
  }

  const initialData = {user: req.user};
  renderPage(initialData, true);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function ServerRouter(req, res) {
  let location = req.url;
  
  match({routes: Routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {   
      handleRedirect(res, redirectLocation);
    }

    if (renderProps) {
      handleRoute(res, renderProps, req);
    }
  });
}

export default ServerRouter;
