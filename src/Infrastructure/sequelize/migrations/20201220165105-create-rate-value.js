"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RateValue", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      rateId: {
        type: Sequelize.UUID,
        references: {
          model: "Rate",
          key: "id",
        },
      },
      currencyId: {
        type: Sequelize.UUID,
        references: {
          model: "Currency",
          key: "id",
        },
      },
      value: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable("RateValue");
  },
};
