const Sequelize = require('sequelize');
const db = require('../db/db');
const Users = require('./users');
const Photos = require('./photos');

const UsersPhotos = db.define('usersPhotos', {});

Users.belongsToMany(Photos, {through: UsersPhotos, foreignKey: 'user_id'});
Photos.belongsToMany(Users, {through: UsersPhotos, foreignKey: 'photo_id'});

UsersPhotos
  .sync()
  .then(resp => {
    console.log('UsersPhotos model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.', err);
  });

module.exports = UsersPhotos;