'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('locations', [{
            name: 'Chiclayo',
            city: 'Chiclayo',
            province: 'Lambayeque',
            createdAt: new Date(), updatedAt: new Date()
        },
            {
                name: 'Salas',
                city: 'Chiclayo',
                province: 'Lambayeque',
                createdAt: new Date(), updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('locations', null, {});
    }
};
