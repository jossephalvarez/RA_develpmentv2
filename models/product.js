'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        type_id: DataTypes.INTEGER
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
        Product.belongsTo(models.TypeProduct, {
            foreignKey:'type_id',
            as:'type'
        });
        Product.belongsToMany(models.Supply, {
            through: 'SupplyProduct',
            as: 'supplies',
            foreignKey: 'product_id'
        });
    };
    return Product;
};