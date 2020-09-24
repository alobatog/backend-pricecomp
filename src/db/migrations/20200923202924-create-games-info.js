module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamesInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.FLOAT
      },
      link: {
        type: Sequelize.STRING
      },
      imgLink: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.FLOAT
      },
      minPlayers: {
        type: Sequelize.INTEGER
      },
      maxPlayers: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GamesInfos');
  }
};