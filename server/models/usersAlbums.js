const Sequelize = require('sequelize');
const db = require('../db/db');
const Users = require('./users');
const Albums = require('./albums');

const UsersAlbums = db.define('usersAlbums', {});

Users.belongsToMany(Albums, {through: UsersAlbums, foreignKey: 'user_id'});
Albums.belongsTo(Users, {through: UsersAlbums, foreignKey: 'album_id'});

UsersAlbums
  .sync()
  .then(resp => {
    console.log('UsersAlbums model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.', err);
  });

module.exports = UsersAlbums;