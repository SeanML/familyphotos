const Sequelize = require('sequelize');
const db = require('../db/db');
const Albums = require('./albums');
const Photos = require('./photos');

const AlbumsPhotos = db.define('albumsPhotos', {});

Albums.hasMany(Photos, {through: AlbumsPhotos, foreignKey: 'photo_id'});
Photos.belongsTo(Albums, {through: AlbumsPhotos, foreignKey: 'album_id'});

AlbumsPhotos
  .sync()
  .then(resp => {
    console.log('AlbumsPhotos model sync() successful.');
  }, err => {
    console.log('An error occured while creating the table.', err);
  });

module.exports = AlbumsPhotos;