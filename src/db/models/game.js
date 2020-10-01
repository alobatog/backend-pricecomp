
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lowerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {});

  Game.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    Game.hasMany(models.StoreInfo, { foreignKey: 'gameId', sourceKey: 'id', as: 'info' });
    models.StoreInfo.belongsTo(models.Game, { foreignKey: 'gameId', sourceKey: 'id' });
  };
  return Game;
};