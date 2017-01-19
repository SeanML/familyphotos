module.exports = (sequelize, DataType) => {
  return sequelize.define('photos', {
      URL: {
      type: DataType.STRING,
      unique: true,
      allowNull: false
    },
    caption: {
      type: DataType.STRING,
      unique: false,
      allowNull: true
    }
  });
};