require('dotenv').config()

module.exports = {
  development:{
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME_DEV || 'comparison_dev',
    host: process.env.DB_HOST || '127.0.0.1',
    logging: false
  },
  test: {
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME_TEST || 'comparison_test',
    host: process.env.DB_HOST || '127.0.0.1',
    logging: false
  },
  production:{
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME || 'comparison_production',
    host: process.env.DB_HOST || '127.0.0.1',
    logging: false
  }
};
