const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'prodect';

    // 使用service后
    const res = await ctx.service.product.index();
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    ctx.body = `query: ${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = `params: ${ctx.params.id}`;

  }

  // post
  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { name, age } = ctx.request.body;
    ctx.body = {
      name,
      age,
    };
  }

  // put
  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id: ctx.params.id,
    };
  }

  // delete
  async delete() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id: ctx.params.id,
    };
  }

}

module.exports = ProductController;
