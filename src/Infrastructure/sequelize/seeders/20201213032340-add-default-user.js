'use strict';
const bcrypt = require("bcrypt");
const uuid = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id: uuid.v4(),
      name: 'Firmino Changani',
      email: 'firmino.changani@gmail.com',
      password: bcrypt.hashSync("hello", 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
