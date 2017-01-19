module.exports = (sequelize, DataType) => {
  return sequelize.define('albums', {
      name: {
        type: DataType.STRING,
        unique: true,
        defaultValue: 'None',
        allowNull: false
      },
      description: {
        type: DataType.STRING,
        unique: false,
        allowNull: true
      }
  });
};