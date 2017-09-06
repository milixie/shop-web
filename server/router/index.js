'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

const home = require('./../controller/home');
const order = require('./../controller/order');
router.get('/', home.home);
router.post('/order', home.placeOrder);
router.get('/order', order.order);

module.exports = router;