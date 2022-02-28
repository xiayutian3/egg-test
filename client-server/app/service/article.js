'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    const data = {
      ...params,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    // 数据库的查询很多时候会出错，所以用 try catch
    try {
      // insert 第一个参数 表名，第二个参数 数据
      const result = await app.mysql.insert('article', data);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      // 查询整张表的数据
      const res = await app.mysql.select('article');
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async detail(id) {
    if (!id) {
      console.log('id not found');
      return null;
    }
    try {
      const result = await this.app.mysql.get('article', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = ArticleService;
