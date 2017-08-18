'use strict';

const path = require('path');
const express = require('express');
const vueRenderer = require('vue-easy-renderer');
const renderOptions = require('./renderer');

const app = express();

app.use(express.static('client'));

renderOptions.onReady = () => {
};
  app.listen(8080, err => {
    console.log(`Express server listening on 9001`);
  });

const base_path = path.resolve(__dirname, '../apps/pages');
const renderer = vueRenderer.connectRenderer(base_path, renderOptions);
app.use(renderer);

app.get('/', (req, res) => {
  res.vueRender('./shopping/app.vue', {});
});

console.log('Server is running in http://localhost:8080/');
module.exports = app;