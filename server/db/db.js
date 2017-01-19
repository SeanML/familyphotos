const Sequelize = require('sequelize');
require('dotenv').config();

let db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    options: {
      timezone: 'America/Los_Angeles'
    }
  }
);

db
  .authenticate()
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch(err => {
    console.log('Unable to connect to DB.');
  });

module.exports = db;