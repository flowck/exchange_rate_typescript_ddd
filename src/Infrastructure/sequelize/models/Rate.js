"use strict";
const { Model } = require("sequelize");
const { ASS_RATE_RATE_VALUE, ASS_CURRENCY_RATE } = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate(models) {
      // Has many RateValue
      models.Rate.hasMany(models.RateValue, {
        foreignKey: "rateId",
        as: ASS_RATE_RATE_VALUE,
      });

      // Belongs to currency
      models.Rate.belongsTo(models.Currency, {
        foreignKey: "currencyId",
        as: ASS_CURRENCY_RATE,
      });
    }
  }

  Rate.init(
    {
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      currencyId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          key: "id",
          model: "Currency",
        },
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
      modelName: "Rate",
      freezeTableName: true,
    }
  );

  return Rate;
};
