'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      baseCurrenciesId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'currencies',
        }
      },
      timestamp: {
        type: Sequelize.DATE
      },
      value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      equivalentCurrenciesId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'currencies',
        }
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
    await queryInterface.dropTable('rates');
  }
};