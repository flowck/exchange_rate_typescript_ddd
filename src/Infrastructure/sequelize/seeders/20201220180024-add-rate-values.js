'use strict';
const rates_data = require("./rates.json");
const models = require("../models");
const uuid = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Query all currencies to retrieve its ID
    // Create a lookup table with the following format { "currency_code": "currency_db_id" }
    // For each rate in rates_data
    //    Generates an object with base id, equivalent id and the rate value
    // Bulk insert the resultant array to the db

    const rateValues = [];
    const _currencies = {};
    const rateId = uuid.v4();
    const [currencies] = await models.sequelize.query('SELECT id, code FROM "Currency";');
    const createdAndUpdatedAt = { createdAt: new Date(), updatedAt: new Date() };

    console.log(currencies);

    // Create new rate
    await queryInterface.bulkInsert('Rate', [
      {
        id: rateId,
        timestamp: new Date(),
        ...createdAndUpdatedAt
      }
    ]);
    console.log('Rate created');

    // Create a lookup table with the following format { "currency_code": "currency_db_id" }
    currencies.forEach(currency => (_currencies[currency.code] = currency.id));

    // Create rate values
    Object.keys(rates_data.rates).forEach(code => {
      const currencyId = _currencies[code];
      console.log(currencyId);
      if (currencyId) {
        rateValues.push({
          id: uuid.v4(),
          rateId,
          currencyId,
          value: rates_data.rates[code],
          ...createdAndUpdatedAt
        });
      }
    });

    console.log(rateValues);
    await queryInterface.bulkInsert('RateValue', rateValues, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RateValue', null, {});
  }
};
