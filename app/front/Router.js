import React from 'react';
import {match, RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';
import Routes from './Routes';
import store from './store';
import Helmet from 'react-helmet';

import Root from './App/Root';
import {Provider} from 'react-redux';

function renderComponentWithRoot(Component, componentProps, initialData) {
  let componentHtml;
  let initialStore = store(initialData);

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
  reduxData = initialData;
  
  return '<!doctype html>\n' + renderToString(
    <Root content={componentHtml} head={head} reduxData={reduxData}/>
  );
}

function handleRoute(res, renderProps) {
  function renderPage(initialData) {
    try {
      const wholeHtml = renderComponentWithRoot(RouterContext, renderProps, initialData);
      res.status(200).send(wholeHtml);
    } catch (error) {
      console.trace(error); // eslint-disable-line
    }
  }

  const initialData = {};
  renderPage(initialData);
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
      handleRoute(res, renderProps);
    }
  });
}

export default ServerRouter;
