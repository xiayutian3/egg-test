'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hello, egg';

    // // service的服务可以复用，举个例子
    // const res = await ctx.service.product.index();
    // ctx.body = res;

    // 假设渲染页面  第一个参数，是文件，第二个参数是数据
    await ctx.render('index.html', {
      res: {
        id: 123456,
      },
      list: [ 'd', 'f' ],
    });
  }
}

module.exports = HomeController;
