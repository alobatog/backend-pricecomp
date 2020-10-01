module.exports = (sequelize, DataTypes) => {
  const StoreInfo = sequelize.define('StoreInfo', {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imgLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  StoreInfo.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    StoreInfo.belongsTo(models.Game, { foreignKey: 'gameId', sourceKey: 'id' });
  };
  return StoreInfo;
};