'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      })

      Product.hasMany(models.Image,{
        as : 'images',
        onDelete : 'cascade'
      })
      Product.belongsToMany(models.User, {
        as: "users",
        through: "ProductUsers",
        foreignKey: "productId",
        otherKey: "userId"
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    mark: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    variety: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL(10,2),
    vegan: DataTypes.BOOLEAN,
    celiac: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};