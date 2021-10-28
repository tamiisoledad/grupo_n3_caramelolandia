'use strict';
let categories = [
  {name: "Caramelos", createdAt: new Date, updatedAt: new Date},
  {name: "Chocolates", createdAt: new Date, updatedAt: new Date},
  {name: "Alfajores", createdAt: new Date, updatedAt: new Date},
  {name: "Obleas", createdAt: new Date, updatedAt: new Date},
  {name: "Chicles", createdAt: new Date, updatedAt: new Date},
  {name: "Galletitas", createdAt: new Date, updatedAt: new Date},
  {name: "Chupetines", createdAt: new Date, updatedAt: new Date},
  {name: "Gomitas", createdAt: new Date, updatedAt: new Date},
  {name: "Bombones", createdAt: new Date, updatedAt: new Date},
  {name: "Confites", createdAt: new Date, updatedAt: new Date},
  {name: "Importados", createdAt: new Date, updatedAt: new Date}
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Categories', categories ,{});
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
