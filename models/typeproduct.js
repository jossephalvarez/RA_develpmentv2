'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeProduct = sequelize.define('TypeProduct', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  TypeProduct.associate = function(models) {
    // associations can be defined here
      TypeProduct.hasMany(models.Product,{
          foreignKey: 'type_id',
          as: 'products'
      })

  };
  return TypeProduct;
};