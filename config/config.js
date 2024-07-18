require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    host: 'database', // Use the service name "database" as the hostname
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      connectTimeout: 30000,
    },
  },
  test: {
    username: 'user',
    password: 'password',
    database: 'shopify_like',
    host: 'database', // Use the service name "database" as the hostname
    dialect: 'postgres',
  },
  production: {
    username: 'user',
    password: 'password',
    database: 'shopify_like',
    host: 'database', // Use the service name "database" as the hostname
    dialect: 'postgres',
  },
};