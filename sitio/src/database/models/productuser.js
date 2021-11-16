'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductUser.belongsTo(models.Order, {
        as: "order",
        foreignKey:"orderId",
        onDelete: "cascade"
      })
      
    }
  };
  ProductUser.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'ProductUser',
  });
  return ProductUser;
};