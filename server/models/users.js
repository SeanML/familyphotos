module.exports = (sequelize, DataType) => {
  return sequelize.define('users', {
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
};