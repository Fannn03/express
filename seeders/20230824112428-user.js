'use strict';

const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let data = []

    for (let i = 0; i < 50; i++) {

      let user = {
        username: faker.internet.userName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        createdAt: faker.date.anytime(),
        updatedat: faker.date.anytime()
      }

      data.push(user)

    }

    return queryInterface.bulkInsert('users', data)

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
