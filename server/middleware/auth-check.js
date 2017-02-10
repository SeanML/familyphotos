const jwt = require('jsonwebtoken');
const Users = require('../models/users');
require('dotenv').config();

module.exports = (req, res, next) => {
  if(!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authorization.split(' ')[1];

  return jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err) {
      return res.status(401).end();
    }

    const userId = decoded.sub;

    return Users.findById(userId)
      .then(user => {
        if(!user) {
          return res.status(401).end();
        }

        return next();
      })
      .catch(err => {
        if(err) {
          return res.status(401).end();
        }
      })
  });
};