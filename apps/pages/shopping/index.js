'ise strict';

import Vue from 'vue';
import VueEasyRenderer from 'vue-easy-renderer/dist/plugin';
import vueGlobal from '../../vue/plugin';
import App from './app';

Vue.use(vueGlobal);
Vue.use(VueEasyRenderer);

const app = new Vue(App);

app.$mount('#app');
