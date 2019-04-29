'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('SupplyProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            supply_id: {
                type: Sequelize.INTEGER,
                references: {model: 'Supplies', key: 'id'},
                onDelete: 'CASCADE',
                allowNull: false
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {model: 'Products', key: 'id'},
                onDelete: 'CASCADE',
                allowNull: false
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('SupplyProducts');
    }
};