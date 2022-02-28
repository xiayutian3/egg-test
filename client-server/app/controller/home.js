'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 插件 会挂载 mysql到app上
    const { ctx, app } = this;
    // 查询 article表的所有数据
    const res = await app.mysql.select('article');
    console.log('res: ', res);

    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
