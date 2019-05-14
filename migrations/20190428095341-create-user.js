'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50),
                validate: {
                    len: {
                        args: [0, 50],
                        msg: 'El nombre tiene demasiados carácteres'
                    }
                }
            },
            surname: {
                allowNull: false,
                type: Sequelize.STRING(100),
                validate: {
                    len: {
                        args: [0, 100],
                        msg: 'Los apellidos tienen demasiados carácteres'
                    }
                }

            },
            dni: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            nickname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            phone: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(100),
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'Please enter a valid email address'
                    },
                },

            },
            address: {
                type: Sequelize.STRING
            },
            is_provider: {
                type: Sequelize.BOOLEAN
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            active: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};