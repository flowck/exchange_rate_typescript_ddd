'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RateValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.RateValue.belongsTo(models.Rate, { foreignKey: 'rateId' });
      models.RateValue.belongsTo(models.Currency, { foreignKey: 'currencyId' });
    }
  };

  RateValue.init({
    rateId: {
      type: DataTypes.UUID,
      references: {
        model: 'Rate',
        key: 'id'
      }
    },
    currencyId: {
      type: DataTypes.UUID,
      references: {
        model: 'Currency',
        key: 'id'
      }
    },
    value: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'RateValue',
  });

  return RateValue;
};