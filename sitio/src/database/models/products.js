module.exports = (sequelize, DataTypes) => {

    const alias = 'Product'

    const cols = {
        id:{
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true

        },
        name : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        info : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        mark : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        price :{
            type : DataTypes.DECIMAL(3,2),
            allowNull : false
        },
        variety : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        stock :{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        vegan : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue: 0
        },
        celiac : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue: 0
        },
        category_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null

        },
           /*  createdAt:{
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

        tableName : 'products', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

    }
    
    const Product = sequelize.define(alias,cols,config)
    Product.associate = function(models){
        Product.belongsTo(models.Category,{
            as : 'category',
            foreignKey : "category_id"
          })
    
          Product.hasMany(models.Image,{
            as : 'images',
            onDelete : 'cascade',
            foreignKey: "product_id"
          })
          Product.belongsTo(models.Product_user,{
              as: "products_user",
              foreignKey: "product_id"
          })
    }
 

    return Product

}