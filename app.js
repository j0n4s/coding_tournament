/* eslint-disable */
require('es6-promise').polyfill();

//babel polyfill ES6
require('babel-core/register')();

require.extensions['.scss'] = function () { return; };
require.extensions['.css'] = function () { return; };

const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
var http = require('http').Server(app);

app.use(compression());
app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/public', express.static(path.resolve(__dirname, 'public')));

require('./app/api/routes.js')(app);
require('./app/front/server.js')(app);

const database = require('./app/api/configs/database').development;
const port = require('./app/api/configs/ports.js').development;

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(database, {useMongoClient: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  http.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
      console.log(err);
    }

    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  });
});
