require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, NODE_ENV } = process.env;

const DB_PORT = process.env.DB_PORT || '5433';

const config = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'development',
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'production',
    host: DB_HOST,
    dialect: 'postgres',
  },
};

module.exports = config[NODE_ENV];
