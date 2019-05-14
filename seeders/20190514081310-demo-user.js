'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'Ceverino',
            surname: 'Alvarez',
            dni: '5454545',
            nickname: 'Ceve',
            phone: '615224558',
            email: 'ceve@gmail.com',
            is_provider: false,
            password: 'linalaly',
            createdAt: new Date(), updatedAt: new Date()
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
