const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {
  let Users = sequelize.define('users', {
    firstName: {
      type: DataType.STRING,
      unique: false,
      allowNull: false
    },
    lastName: {
      type: DataType.STRING,
      unique: false,
      allowNull: false
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      unique: false,
      allowNull: false
    }
  });

  Users.comparePassword = (password, callback) => {
    bcrypt.compare(password, this.password, callback);
  };

  return Users;
};