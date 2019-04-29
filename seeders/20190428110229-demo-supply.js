'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies', [{
            date: '13/04/2019',
            location_id: 1,
            createdAt: new Date(), updatedAt: new Date()

        },
            {
                date: '20/04/2019',
                location_id: 1,
                createdAt: new Date(), updatedAt: new Date()


            },
            {
                date: '13/04/2019',
                location_id: 2,
                createdAt: new Date(), updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies', null, {});
    }
};
