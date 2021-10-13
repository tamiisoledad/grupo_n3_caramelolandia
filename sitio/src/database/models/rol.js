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

        underscored : true

    }

const Rol = sequelize.define(alias,cols,config)

Rol.associate = function(models){
    Rol.belongsTo(models.user,{
      as : "products",
      foreignkey: "user_id"
    });
  }

return Rol

}