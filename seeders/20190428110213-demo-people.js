'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'Josseph',
            surname: 'Alvarez',
            dni: '123',
            nickname: 'Zino',
            phone: '1234',
            email: 'jjsj@gmail.com',
            is_provider: false,
            password: '123456',
            createdAt: new Date(), updatedAt: new Date()
        }, {

            name: 'Juan',
            surname: 'Provider1',
            dni: '77934544e',
            nickname: 'Zino1',
            phone: '615224558',
            email: 'cea@gmail.com',
            password: '123456',
            createdAt: new Date(), updatedAt: new Date()
        },
        {

            name: 'Albert',
            surname: 'Linares',
            dni: '77934544s',
            nickname: 'Zino2',
            phone: '123456',
            email: 'cea2@gmail.com',
            password: '123456',
            createdAt: new Date(), updatedAt: new Date()
        }

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
