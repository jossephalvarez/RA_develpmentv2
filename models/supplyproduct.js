'use strict';
module.exports = (sequelize, DataTypes) => {
    const SupplyProduct = sequelize.define('SupplyProduct', {
        supply_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {});
    SupplyProduct.associate = function (models) {
        // associations can be defined here
    };
    return SupplyProduct;
};