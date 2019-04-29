'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplyProducts', [{
            quantity: 10,
            supply_id: 1,
            product_id: 1,
            createdAt: new Date(), updatedAt: new Date()
        },
            {
                quantity: 20,
                supply_id: 2,
                product_id: 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                quantity: 30,
                supply_id: 1,
                product_id: 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                quantity: 40,
                supply_id: 2,
                product_id: 2,
                createdAt: new Date(), updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplyProducts', null, {});
    }
};
