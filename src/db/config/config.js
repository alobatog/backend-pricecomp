require('dotenv').config()

module.exports = {
  development:{
    username: process.env.DB_USERNAME || 'lobato',
    password: process.env.DB_PASSWORD || 'asdasd',
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME_DEV || 'comparison_dev',
    host: process.env.DB_HOST || '127.0.0.1',
  },
  test: {
    username: process.env.DB_USERNAME || 'lobato',
    password: process.env.DB_PASSWORD || 'asdasd',
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME_TEST || 'comparison_test',
    host: process.env.DB_HOST || '127.0.0.1',
  },
  production:{
    username: process.env.DB_USERNAME || 'lobato',
    password: process.env.DB_PASSWORD || 'asdasd',
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME || 'comparison_production',
    host: process.env.DB_HOST || '127.0.0.1',
  }
};
