'use strict';
let users = [
  {name: "leandro rodriguez" , email: "leandrodj456@gmail.com",password: "$2a$10$somSHwq5AGreeamGpdnSK.yxbvuHmxzaLcUCUaFOagKs4yBb2u79u", avatar: "default-img.png", rolId: 1, createdAt: new Date, updatedAt: new Date},
   {name: "juan diego ", email:"jdeg_21@hotmail.com",password: "$2a$10$StwhMho60d5dM5UYrQLl.O5bil5yCnJQ2AW07F4sAScbsP5.eZ96G", avatar: "default-img.png", rolId: 1, createdAt: new Date, updatedAt: new Date},
    {name: "Tamara Benitez", email: "tamiisoledad4@gmail.com",password: "$2a$10$hGcBPxGteMrQDUhiEJmJruyQG/WEB.4zPHs57EHPkUh4y0OObaQ3S", avatar: "default-img.png", rolId: 1, createdAt: new Date, updatedAt: new Date}
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
