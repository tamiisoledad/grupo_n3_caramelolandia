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
        }
    }

    const config = {

        tableName : 'rol', //si la tabla no coincide con el prural del modelo va esta configuracion
        timestamps : true, // si tiene timestamps va false
        underscored : true // si esta escrito con guion bajo(_) ej: updated_:at

    }

const Rol = sequelize.define(alias,cols,config)

Rol.associate = function(models){
    Rol.belongsTo(models.Usuario,{
      as : "usuarios",
      foreignkey: "user_id"
    });
  }

return Rol

}