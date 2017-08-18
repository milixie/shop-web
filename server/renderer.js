const path = require('path');

const renderer = {
  watch: false,
  head: {
    meta: [
      {charset: 'utf-8'},
      {content: 'yes', name: 'apple-mobile-web-app-capable'},
      {content: 'yes', name: 'apple-touch-fullscreen'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'viewport', content: 'width=device-width, user-scalable=no'},
      {name: 'x5-page-mode', content: 'app'}
    ],
    link: [{rel: 'shortcut icon', type: 'image/x-icon', href: '/static/image/favicon.ico'}],
    script: [{src: '/assets/vendor.bundle.js', defer: true}]
  },
  global: {},
  plugins: [path.resolve(__dirname, '../apps/vue/plugin.js')]
};

module.exports = renderer;