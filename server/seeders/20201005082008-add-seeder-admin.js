'use strict';
const {hash} = require ("../helpers/bcrypt")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert ("Users", [
    {
      email : "user1@email.com",
      password : hash ("user1"),
      organization: "Hacktiv8",
      createdAt: new Date (),
      updatedAt: new Date ()
    },

    {
      email : "user2@email.com",
      password : hash ("user2"),
      organization: "Hacktiv8",
      createdAt: new Date (),
      updatedAt: new Date ()
    },

    {
      email : "user3@email.com",
      password : hash ("user3"),
      organization: "Nexmedia",
      createdAt: new Date (),
      updatedAt: new Date ()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete ("Users", null, {})
  }
};
