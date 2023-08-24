'use strict';

const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let data = []

    for (let i = 0; i < 1000; i++) {

      let firstName = faker.person.firstName()
      let lastName = faker.person.lastName()

      let user = {
        username: faker.internet.userName({firstname: firstName, lastName: lastName}),
        email: faker.internet.email(),
        password: faker.internet.password({length: 20}),
        firstname: firstName,
        lastname: lastName,
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
