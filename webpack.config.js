/* eslint-disable */
'use strict';

var config = require('./webpack/config')();
var webpack = require('webpack');

config.context = __dirname;

module.exports = config;
