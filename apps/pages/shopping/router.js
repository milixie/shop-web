'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/index.vue';
import Detail from './components/detail/detail.vue';

Vue.use(VueRouter);
const router_options = {
  mode: 'history',
  routes: [{
    name: 'index',
    path: '/',
    component: Index
  }, {
    name: 'detail',
    path: '/detail',
    component: Detail
  }, {
    path: '*',
    component: Index
  }]
};
const router = new VueRouter(router_options);
router.$ssrInstance = () => new VueRouter(router_options);
export default router;