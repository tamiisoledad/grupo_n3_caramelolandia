module.exports = (sequelize,dataTypes) => {

  const alias = "Categoria";

  const cols = {

      id : {  
          type : dataTypes.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
      },
      name : {
          type : dataTypes.STRING(100),
          allowNull : false
      }
  }

  const config = {

    tableName : 'category', //si la tabla no coincide con el prural del modelo va esta configuracion
    timestamps : true, // si tiene timestamps va false
    underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

}

const Category = sequelize.define(alias,cols,config)

Category.associate = function(models){

  Category.hasMany(models.Producto, {

    as : "products",

    foreignkey: "category_id"
    
  });
}

return Category

}