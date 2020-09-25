'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Games.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    imgLink: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};