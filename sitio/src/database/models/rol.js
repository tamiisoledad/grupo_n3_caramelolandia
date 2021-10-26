module.exports = (sequelize,dataTypes) => {

    const alias = "Rol";

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

        tableName : 'rols', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : false // si esta escrito con guion bajo(_) ej: updated_:at

    }

const Rol = sequelize.define(alias,cols,config)

Rol.associate = function(models){
    Rol.belongsTo(models.User,{
      as : "rol",
      foreignkey: "user_id"
    });
  }

return Rol

}