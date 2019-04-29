'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
            name: 'Primera',
            price: 1.2,
            type_id: 1,
            createdAt: new Date(), updatedAt: new Date()
        },
            {
                name: 'Segunda',
                price: 1.0,
                type_id: 1,
                createdAt: new Date(), updatedAt: new Date()
            }], {});
    },
    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Products', null, {});
    }
};
