
// module.exports = (sequelize, DataTypes) => {
//   const User =  sequelize.define('User', {   
//     FullName:{
//       type:DataTypes.STRING,
//       allowNull: false,
//       unique:true,
//       len:[7,100],
//       validate:{
//         is: /^[a-z]+$/i,
//       }
//     }, 
//     Email:{
//       type:DataTypes.STRING,
//       unique:true,
//       validate:{
//         isEmail: true,
//       }
//     },
//     Phone:{
//       type:DataTypes.STRING,
//       allowNull: false,
//       unique:true,
//     }, 

//   });

//   return User;

// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
  });
  return User;
};