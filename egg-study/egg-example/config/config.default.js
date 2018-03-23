'use strict';
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521511695577_916';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '123456',
  };
  // add your config here
  config.middleware = [];
  return config;
};

