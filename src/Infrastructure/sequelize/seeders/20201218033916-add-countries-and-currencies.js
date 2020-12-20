'use strict';
const uuid = require("uuid");
const countries = require("./countries.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const _countries = [];
    const currencies = [];

    countries.forEach(country => {
      const countryId = uuid.v4();
      const countryCode = country.currencies[0].code;

      if (country.alpha3Code && countryCode && countryCode.length === 3) {
        _countries.push({
          id: countryId,
          name: country.name,
          flag: country.flag,
          code: country.alpha3Code,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        currencies.push({
          id: uuid.v4(),
          countryId: countryId,
          code: country.currencies[0].code,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    });

    await queryInterface.bulkInsert('Country', _countries, {});
    await queryInterface.bulkInsert('Currency', currencies, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Country', null, {});
    await queryInterface.bulkDelete('Currency', null, {});
  }
};
