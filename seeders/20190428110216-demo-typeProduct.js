'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('typeProducts', [{
          code: 'CRD',
          name: 'Cerdo',
          createdAt: new Date(), updatedAt: new Date()

      }, {
          code: 'OVN',
          name: 'Ovino',
          createdAt: new Date(), updatedAt: new Date()
      },
          {
              code: 'BOV',
              name: 'Bovino',
              createdAt: new Date(), updatedAt: new Date()
          }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('typeProducts', null, {});
  }
};
