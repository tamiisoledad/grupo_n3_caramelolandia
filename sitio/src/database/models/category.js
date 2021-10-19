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
      },
      ranking : {
          type : dataTypes.INTEGER.UNSIGNED,
          allowNull : false,
          unique : true
      },
      active :{
          type : dataTypes.BOOLEAN,
          defaultValue : 1,
          allowNull: false
      }
  }

  const config = {

      underscored : true

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