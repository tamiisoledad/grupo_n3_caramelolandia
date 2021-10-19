module.exports = (sequelize,dataTypes) => {

    const alias = "Usuario";

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
        }
    }

    const config = {

        tableName : 'user', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

    }

const User = sequelize.define(alias,cols,config)

return User

}