const usersController = require('./usersController');
const photosController = require('./photosController');
const albumsController = require('./albumsController');
const usersPhotosController = require('./usersPhotosController');
const usersAlbumsController = require('./usersAlbumsController');
const albumsPhotosController = require('./albumsPhotosController');

let router = {};
let controllers = [ 
  usersController, 
  photosController,
  albumsController,
  usersPhotosController,
  usersAlbumsController,
  albumsPhotosController
];
controllers.forEach(controller => {
  router[controller.path] = controller.router;
});

module.exports = router;