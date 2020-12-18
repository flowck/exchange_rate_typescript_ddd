'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currencies extends Model {
    static associate(models) {
      // Belongs to a country
      models.currencies.belongsTo(models.countries, {
        foreignKey: 'countriesId',
        as: 'currency'
      });

      // Has many rates
      models.currencies.hasMany(models.rates, {
        foreignKey: 'baseCurrenciesId',
        as: 'rates'
      });

      models.currencies.hasMany(models.rates, {
        foreignKey: 'equivalentCurrenciesId',
      });
    }
  };
  currencies.init({
    countriesId: {
      type: DataTypes.UUID,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    description: DataTypes.STRING,
    code: DataTypes.STRING,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
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
    modelName: 'currencies',
  });
  return currencies;
};