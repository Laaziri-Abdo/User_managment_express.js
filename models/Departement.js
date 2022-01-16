
module.exports = (sequelize, DataTypes) => {
  const Departement =  sequelize.define('Departement', {   
    nom:{
      type:DataTypes.STRING,
      allowNull: false,
      unique:true,
    }, 
    descreption:{
      type:DataTypes.STRING,
    },
   
  });

  Departement.associate = function(models) {
    Departement.hasMany(models.User,{
        onDelete: 'cascade',
        onUpdate: 'restrict',
        as:"Users",
        foreignKey:"idDepartement"
    });
};

  return Departement;

};

