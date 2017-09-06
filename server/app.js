'use strict';

const path = require('path');
const express = require('express');
const vueRenderer = require('vue-easy-renderer');
const renderOptions = require('./renderer');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

renderOptions.onReady = () => {
  app.listen(8080, err => {
    console.log(`Express server listening on 8080`);
  });
};

const base_path = path.resolve(__dirname, '../apps/pages');
const renderer = vueRenderer.connectRenderer(base_path, renderOptions);
app.use(renderer);
app.use(require('./router'));

console.log('Server is running in http://localhost:8080/');
module.exports = app;