const Users = require('../models/users');
const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, (req, email, password, done) => {
    bcrypt.hash(password.trim(), process.env.SALT_ROUNDS)
      .then(hash => {
        const newUser = Users.build({
          firstName: req.body.firstName.trim(),
          lastName: req.body.lastName.trim(),
          password: hash,
          email: email.trim()
        });

        return newUser
          .save()
          .then(() => {
            return done(null);
          })
          .catch(err => {
            return done(err);
          });
      })
      .catch(err => {
        return done(err);
      });
});