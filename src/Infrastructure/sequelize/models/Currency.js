"use strict";
const { Model } = require("sequelize");
const { ASS_CURRENCY_COUNTRY, ASS_CURRENCY_RATE_VALUE, ASS_CURRENCY_RATE } = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {
    static associate(models) {
      // Belongs to a country
      models.Currency.belongsTo(models.Country, {
        foreignKey: "countryId",
        as: ASS_CURRENCY_COUNTRY,
      });

      // Has many Rate
      models.Currency.hasMany(models.Rate, {
        foreignKey: "currencyId",
        as: ASS_CURRENCY_RATE,
      });

      // Has many RateValue
      models.Currency.hasMany(models.RateValue, {
        foreignKey: "currencyId",
        as: ASS_CURRENCY_RATE_VALUE,
      });
    }
  }

  Currency.init(
    {
      countryId: {
        type: DataTypes.UUID,
        references: {
          model: "country",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING(70),
      },
      code: DataTypes.STRING(5),
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Currency",
    }
  );
  return Currency;
};
