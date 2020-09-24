'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamesInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GamesInfo.init({
    gameId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    link: DataTypes.STRING,
    imgLink: DataTypes.STRING,
    time: DataTypes.FLOAT,
    minPlayers: DataTypes.INTEGER,
    maxPlayers: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'GamesInfo',
  });
  return GamesInfo;
};