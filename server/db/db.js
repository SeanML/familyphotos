const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config();

let sequelize = new Sequelize(
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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch(err => {
    console.log('Unable to connect to DB.');
  });

const Users = sequelize.import(path.join(__dirname, '../models/users'));
const Photos = sequelize.import(path.join(__dirname, '../models/photos'));
const Albums = sequelize.import(path.join(__dirname, '../models/albums'));
const UsersPhotos = sequelize.import(path.join(__dirname, '../models/usersPhotos'));
const UsersAlbums = sequelize.import(path.join(__dirname, '../models/usersAlbums'));
const AlbumsPhotos = sequelize.import(path.join(__dirname, '../models/albumsPhotos'));

Users.belongsToMany(Albums, {through: UsersAlbums, foreignKey: 'user_id'});
Users.belongsToMany(Photos, {through: UsersPhotos, foreignKey: 'user_id'});
Photos.belongsToMany(Users, {through: UsersPhotos, foreignKey: 'photo_id'});
Albums.belongsToMany(Photos, {through: AlbumsPhotos, foreignKey: 'album_id'});

sequelize.sync()
  .then(() => {
    console.log('Tables synced!');
  })
  .catch(err => {
    console.log('Unable to sync tables.');
  });

module.exports = sequelize;