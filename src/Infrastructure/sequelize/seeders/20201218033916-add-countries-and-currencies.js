'use strict';
const uuid = require("uuid");
const countries = require("./countries.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const _countries = [];
    const currencies = [];

    countries.forEach(country => {
      const countryId = uuid.v4();
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
        countriesId: countryId,
        code: country.currencies[0].code,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    await queryInterface.bulkInsert('countries', _countries, {});
    await queryInterface.bulkInsert('currencies', currencies, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('countries', null, {});
    await queryInterface.bulkDelete('currencies', null, {});
  }
};
