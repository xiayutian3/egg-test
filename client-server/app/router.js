'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 创建文章
  router.post('/article/create', controller.article.create);
  // 查询列表
  router.get('/article/lists', controller.article.lists);
  // 查看详情
  router.get('/article/detail/:id', controller.article.detail);
};
