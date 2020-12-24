"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Currency", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      countryId: {
        type: Sequelize.UUID,
        references: {
          model: "Country",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING(70),
      },
      code: {
        type: Sequelize.STRING(5),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Currency");
  },
};
