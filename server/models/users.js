const Sequelize = require('sequelize');
const db = require('../db/db');

const Users = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  }
});

Users
  .sync()
  .then(resp => {
    console.log('Users model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.', err);
  });

module.exports = Users;