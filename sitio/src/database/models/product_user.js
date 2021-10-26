module.exports = (sequelize, DataTypes) => {

  const alias = 'Product_user'

  const cols = {
      id:{
          type : DataTypes.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true

      },
      user_id : {
          type : DataTypes.INTEGER.UNSIGNED,
          allowNull : false
      },
      product_id : {
          type : DataTypes.INTEGER.UNSIGNED,
          allowNull : false
      },
      quantity : {
          type : DataTypes.INTEGER,
          allowNull : false
      },
      total :{
          type : DataTypes.DECIMAL(3,2),
          allowNull : false
      },
      /* createdAt:{
        type : DataTypes.DATE,
        defaultValue : null,
        allowNull: true
    },
updatedAt: {
    type : DataTypes.DATE,
        defaultValue : null,
        allowNull: true
} */
  }
   
  const config = {

      tableName : 'product_users', //si la tabla no coincide con el prural del modelo va esta configuracion
      timestamps : true, // si tiene timestamps va false
      underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

  }
  
  const Product_user = sequelize.define(alias,cols,config)
  
  Product_user.associate = function(models){
    Product_user.hasMany(models.Product,{
      as : "products",
      foreignkey: "product_id"
    });
    Product_user.belongsTo(models.User,{
      as : "products_user",
      foreignkey: "user_id"
    });
  }

  return Product_user
}