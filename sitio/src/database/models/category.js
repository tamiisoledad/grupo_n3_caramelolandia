

module.exports = (sequelize,dataTypes) => {

  const alias = "Category";

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
     /*  createdAt:{
        type : dataTypes.DATE,
        defaultValue : null,
        allowNull: true
    },
updatedAt: {
    type : dataTypes.DATE,
        defaultValue : null,
        allowNull: true
} */
  }

  const config = {

    tableName : 'categories', //si la tabla no coincide con el prural del modelo va esta configuracion
    timestamps : true, // si tiene timestamps va false
    underscored : false // si esta escrito con guion bajo(_) ej: updated_:at

}

const Category = sequelize.define(alias,cols,config)

Category.associate = function(models){

  Category.hasMany(models.Product, {

    as : "products",

    foreignkey: "category_id"
    
  });
}

return Category

}