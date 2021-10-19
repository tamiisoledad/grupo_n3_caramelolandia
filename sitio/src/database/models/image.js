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

      underscored : true

  }

const Image = sequelize.define(alias,cols,config)

Image.associate = function(models){
  Image.belongsTo(models.Producto,{
    as : "products",
    foreignkey: "image_id"
  });
}

return Image

}