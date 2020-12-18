'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rates extends Model {
    static associate(models) {
      // Belongs to
      models.rates.belongsTo(models.currencies, {
        foreignKey: 'baseCurrenciesId',
        as: 'rates'
      });

      models.currencies.belongsTo(models.currencies, {
        foreignKey: 'equivalentCurrenciesId',
        as: 'equivalentRates'
      });
    }
  };
  rates.init({
    baseCurrenciesId: {
      type: DataTypes.UUID,
      references: {
        key: 'id',
        model: 'currencies',
      }
    },
    timestamp: DataTypes.DATE,
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    equivalentCurrenciesId: {
      type: DataTypes.UUID,
      references: {
        key: 'id',
        model: 'currencies',
      }
    },
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'rates',
  });
  return rates;
};