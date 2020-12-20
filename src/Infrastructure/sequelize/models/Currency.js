'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {
    static associate(models) {
      // Belongs to a country
      models.Currency.belongsTo(models.Country, {
        foreignKey: 'countryId',
        as: 'currency'
      });

      // Has many RateValue
      models.Currency.hasMany(models.RateValue, { foreignKey: 'currencyId' });
    }
  };

  Currency.init({
    countryId: {
      type: DataTypes.UUID,
      references: {
        model: 'country',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(70)
    },
    code: DataTypes.STRING(5),
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
    modelName: 'Currency',
  });
  return Currency;
};