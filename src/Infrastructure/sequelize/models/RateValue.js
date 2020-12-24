"use strict";
const { Model } = require("sequelize");
const { ASS_CURRENCY_RATE_VALUE, ASS_RATE_RATE_VALUE } = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  class RateValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Belongs to Rate
      models.RateValue.belongsTo(models.Rate, {
        foreignKey: "rateId",
        as: ASS_RATE_RATE_VALUE,
      });

      // Belongs to Currency
      models.RateValue.belongsTo(models.Currency, {
        foreignKey: "currencyId",
        as: ASS_CURRENCY_RATE_VALUE,
      });
    }
  }

  RateValue.init(
    {
      rateId: {
        type: DataTypes.UUID,
        references: {
          model: "Rate",
          key: "id",
        },
      },
      currencyId: {
        type: DataTypes.UUID,
        references: {
          model: "Currency",
          key: "id",
        },
      },
      value: DataTypes.DOUBLE,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "RateValue",
    }
  );

  return RateValue;
};
