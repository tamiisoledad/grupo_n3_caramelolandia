module.exports = (sequelize, DataTypes) => {

    const alias = 'Producto'

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
        vareity : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        stock :{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        image_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
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
        length : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null

        },
        category_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null

        }

    }
     
    const config = {

        tableName : 'products', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

    }
    
    const Product = sequelize.define(alias,cols,config)
    
    return Product

}