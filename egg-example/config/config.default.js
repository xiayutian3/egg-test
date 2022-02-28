/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645855201094_6566';

  // add your middleware config here
  config.middleware = [];

  // 关闭csrf策略
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.ejs': 'ejs', // 遇到.ejs .html的文件，用ejs引擎来渲染
      '.html': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
