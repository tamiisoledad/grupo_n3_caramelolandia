module.exports = (sequelize,dataTypes) => {

    const alias = "User";

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
        email : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        avatar : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        rol_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        /* createdAt:{
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

        tableName : 'users', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

    }

const User = sequelize.define(alias,cols,config)

User.associate = function(models){
    User.belongsTo(models.Rol,{
        as : 'rol',
        foreignKey: "rol_id"
      })
      User.belongsTo(models.Product_user,{
        as : 'products_user',
        foreignKey: "user_id"
      })
}

return User

}