const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const PassportLocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, (req, email, password, done) => {
    const userData = {
      email: email.trim(),
      password: password.trim()
    };

    return Users.findOne({ where: { email: email }})
      .then(user => {
        if(!user) {
          const error = new Error('Incorrect email or password.');
          error.name = 'IncorrectCredentialsError';
          return done(error);
        }

        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
          if(passwordErr) {
            return done(passwordErr);
          }

          if(!isMatch) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';
            return done(error);
          }

          const payload = {
            sub: user.id
          };

          const token = jwt.sign(payload, process.env.SECRET);
          const data = {
            firstName: user.firstName
          };

          return done(null, token, data);
        })
      })
      .catch(err => {
        return done(err);
      });
});