'use strict';
module.exports = (sequelize, DataTypes) => {
    const Supply = sequelize.define('Supply', {
        date: DataTypes.STRING,
        location_id: DataTypes.INTEGER,
        UserId: DataTypes.INTEGER
    }, {});
    Supply.associate = function (models) {
        // associations can be defined here
        Supply.belongsToMany(models.Product, {
            through: 'SupplyProduct',
            as: 'products',
            foreignKey: 'supply_id'
        });
        Supply.belongsTo(models.Location, {
            foreignKey: 'location_id'
        });
        Supply.belongsTo(models.User, {
            foreignKey: 'UserId',
        });
    };
    return Supply;
};