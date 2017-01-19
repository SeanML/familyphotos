const Sequelize = require('sequelize');
const db = require('../db/db');

const Albums = db.define('albums', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    defaultValue: 'None',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: true
  }
});

Albums
  .sync()
  .then(resp => {
    console.log('Albums model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.');
  });

module.exports = Albums;