'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  // 占位符 id
  router.get('/product/detail2/:id', controller.product.detail2);
  // 创建数据
  router.post('/product/create', controller.product.create);
  // 修改数据
  router.put('/product/update/:id', controller.product.update);
  // 删除数据
  router.delete('/product/delete/:id', controller.product.delete);
};
