module.exports = (sequelize, DataTypes) => {

  const alias = 'Carrito'

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
      }
  }
   
  const config = {

      tableName : 'carrito', //si la tabla no coincide con el prural del modelo va esta configuracion
      timestamps : true, // si tiene timestamps va false
      underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

  }
  
  const Product_user = sequelize.define(alias,cols,config)
  
  Product_user.associate = function(models){
    Product_user.hasMany(models.product,{
      as : "products",
      foreignkey: "product_id"
    });
    Product_user.belongsTo(models.user,{
      as : "products",
      foreignkey: "user_id"
    });
  }

  return Product_user
}