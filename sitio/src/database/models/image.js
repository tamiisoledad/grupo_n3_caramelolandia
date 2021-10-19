module.exports = (sequelize,dataTypes) => {

  const alias = "Imagen";

  const cols = {

      id : {  
          type : dataTypes.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
      },
      file : {
          type : dataTypes.STRING(255),
          allowNull : false
      },
      product_id : {
        type : dataTypes.INTEGER.UNSIGNED,
        allowNull : false
    }  
    }

    const config = {

      tableName : 'images', //si la tabla no coincide con el prural del modelo va esta configuracion
      timestamps : true, // si tiene timestamps va false
      underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

  }

const Image = sequelize.define(alias,cols,config)

Image.associate = function(models){
  Image.belongsTo(models.Producto,{
    as : "products",
    foreignkey: "product_id"
  });
}

return Image

}