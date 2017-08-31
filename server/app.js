'use strict';

const path = require('path');
const express = require('express');
const vueRenderer = require('vue-easy-renderer');
const renderOptions = require('./renderer');
const WebSocket = require('ws');
const app = express();

app.use(express.static('client'));

renderOptions.onReady = () => {
};
  app.listen(8080, err => {
    console.log(`Express server listening on 8080`);
  });

const base_path = path.resolve(__dirname, '../apps/pages');
const renderer = vueRenderer.connectRenderer(base_path, renderOptions);
app.use(renderer);

app.get('/', (req, res) => {
  res.vueRender('./shopping/app.vue', {});
});

const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = (evt) => {
  console.log('connection open ...');
  ws.send('Hello webSocket');  //向服务器发送数据
};

ws.onmessage = (evt) => {
  console.log('Received message:' + evt.data);
  ws.close();
};

ws.onclose = (evt) => {
  console.log('connection closed');
};

ws.onerror = (evt) => {
  console.log('error' , evt);
};

ws.addEventListener('open', function(event) {
  //回调
  console.log(event, 'add open');
});

ws.addEventListener('message', function(event) {
  //回调
  console.log('add message');
});

ws.addEventListener('close', function(event) {
  //回调
  console.log('add close');
});

ws.addEventListener('error', function(event) {
  //回调
  console.log('error');
});

console.log('Server is running in http://localhost:8080/');
module.exports = app;