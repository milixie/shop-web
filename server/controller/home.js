'use strict';

const controller = {
  home(req, res) {
    const render_data = {};
    render_data.store_info = {
      bg: 'http://7xj5et.com1.z0.glb.clouddn.com/shop/head.png',
      name: '补水天使俱乐部',
      logo: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/10.jpg',
      collect_total: 54000,
      mail_supplier: [{
        name: '顺丰'
      }],
      free_mail: '满2件或者购满299即可包邮',
    };
    render_data.user = {
      collect_status: true
    };
    render_data.activity = {
      full_minus: [{
        full: 199,
        minus: 100
      }, {
        full: 149,
        minus: 40
      }, {
        full: 99,
        minus: 20
      }]
    };
    render_data.category = [{
      idx: 1,
      name: '面膜',
      content: [{
        name: '鲜补水面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 87,
        comment_rate: '96%',
        price: 6990,
        id: 1001
      }, {
        name: '蚕丝面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 81,
        comment_rate: '99%',
        price: 8990,
        id: 1002
      }, {
        name: '蛋白质面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 224,
        comment_rate: '93%',
        price: 1990,
        id: 1003
      }, {
        name: '植物面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 87,
        comment_rate: '96%',
        price: 6990,
        id: 1004
      }, {
        name: '黑蚕丝面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 65,
        comment_rate: '99%',
        price: 8290,
        id: 1005
      }, {
        name: '美白面膜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 43,
        comment_rate: '99%',
        price: 990,
        id: 1006
      }]
    }, {
      idx: 2,
      name: '爽肤水',
      content: [{
        name: '鲜补水',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 187,
        comment_rate: '96%',
        price: 6990,
        id: 2001
      }, {
        name: '美白',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 81,
        comment_rate: '99%',
        price: 8990,
        id: 2002
      },{
        name: '植物金华鲜补水',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 187,
        comment_rate: '96%',
        price: 6990,
        id: 2003
      }, {
        name: '美白bb 霜',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 53,
        comment_rate: '99%',
        price: 990,
        id: 2004
      }, {
        name: '保湿水',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 231,
        comment_rate: '99%',
        price: 10990,
        id: 2005
      }]
    }, {
      idx: 3,
      name: '润肤露',
      content: [{
        name: '补水润肤露',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 187,
        comment_rate: '96%',
        price: 6990,
        id: 3001
      }, {
        name: '美白润肤露',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 81,
        comment_rate: '99%',
        price: 8990,
        id: 3002
      }, {
        name: '保湿润肤露',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 231,
        comment_rate: '99%',
        price: 10990,
        id: 3003
      }, {
        name: '补水乳液',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 17,
        comment_rate: '93%',
        price: 3990,
        id: 3004
      }, {
        name: '保湿美白润肤露',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 181,
        comment_rate: '98%',
        price: 9990,
        id: 3005
      }, {
        name: '保湿补水润肤露',
        head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
        sale: 21,
        comment_rate: '97%',
        price: 10090,
        id: 3006
      }]
    }];
    render_data.special_product = [{
      name: '保湿洁面乳',
      head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
      sale: 31,
      comment_rate: '98%',
      price: 990,
      id: 4001
    }, {
      name: '美白洁面乳',
      head_img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg',
      sale: 29,
      comment_rate: '97%',
      price: 990,
      id: 4002
    }]
    res.vueRender('./../../apps/pages/shopping/app.vue', render_data);
  }
};

module.exports = controller;