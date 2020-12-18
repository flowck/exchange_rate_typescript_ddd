'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  currencies.init({
    id: DataTypes.UUID,
    countriesId: DataTypes.UUID,
    description: DataTypes.STRING,
    code: DataTypes.STRING,
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'currencies',
  });
  return currencies;
};