'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    // 引入service服务
    const result = await ctx.service.article.create(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布文章失败',
      };
    }
  }

  async lists() {
    const { ctx } = this;
    // 引入service服务
    const result = await ctx.service.article.lists();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询文章失败',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    // 引入service服务
    const result = await ctx.service.article.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询文章详情失败',
      };
    }
  }
}
module.exports = ArticleController;
