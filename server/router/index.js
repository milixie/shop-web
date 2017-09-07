'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('./../db');
const mysql = require('mysql');
const $sql = require('./../sql');

const connect = mysql.createConnection(db.mysql);
// connect.connect();

const jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

const home = require('./../controller/home');
const order = require('./../controller/order');

router.get('/', home.home);
router.get('/detail', home.detail);
router.post('/order', home.placeOrder);
router.get('/order', order.order);

// router.post('/order', (req, res) => {
//   const sql = $sql.orders.add;
//   const params = req.body;
//   console.log(params);
//   conn.query(sql, [params.cart], function(err, result) {
//     if (err) {
//       console.log(err);
//     }
//     if (result) {
//       jsonWrite(res, result);
//     }
//   })
// });

module.exports = router;