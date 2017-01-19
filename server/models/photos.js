const Sequelize = require('sequelize');
const db = require('../db/db');

const Photos = db.define('photos', {
  URL: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  caption: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: true
  }
});

Photos
  .sync()
  .then(resp => {
    console.log('Photos model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.', err);
  });

module.exports = Photos;