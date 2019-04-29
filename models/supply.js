'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    date: DataTypes.STRING
  }, {});
  Supply.associate = function(models) {
    // associations can be defined here
      Supply.belongsToMany(models.Product, {
          through: 'SupplyProduct',
          as: 'products',
          foreignKey: 'supply_id'
      });
  };
  return Supply;
};