'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rates.init({
    baseCurrenciesId: DataTypes.UUID,
    timestamp: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    equivalentCurrenciesId: DataTypes.UUID,
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'rates',
  });
  return rates;
};