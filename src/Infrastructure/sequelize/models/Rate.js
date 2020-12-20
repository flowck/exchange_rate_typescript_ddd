'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate(models) {
      // Has many RateValue
      models.Rate.hasMany(models.RateValue, { foreignKey: 'rateId' });
    }
  };

  Rate.init({
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
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
    modelName: 'Rate',
  });

  return Rate;
};