'use strict';
let products = [
  {
    "name": "Alfajor Fantoche CH",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Fantoche",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Milka DL",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Milka",
    "price": 878,
    "variety": "Dulce de leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Oreo V",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Oreo",
    "price": 878,
    "variety": "Vainilla ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Pepitos CH",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Pepitos",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Terrabusi CH",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Terrabusi",
    "price": 878,
    "variety": "chocolate con dulce de leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones Bon o Bon CH",
    "categoryId": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bon o Bon",
    "price": 878,
    "variety": "CHocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones Arcor",
    "categoryId": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "dfg",
    "price": 878,
    "variety": "Surtidos",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones Ferrero Rocher CH",
    "categoryId": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Ferrero Rocher",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones Hamlet L",
    "categoryId": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Hamlet",
    "price": 878,
    "variety": "Leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones BEL",
    "categoryId": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "BEL",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 30,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Flynn Paff TF",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Flynn Paff",
    "price": 878,
    "variety": "Tutti-frutti ",
    "stock": 105,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Arcor",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Arcor",
    "price": 878,
    "variety": "lldskfjdskl ",
    "stock": 95,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos La Yapa",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "La Yapa",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Misky",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Misky",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 60,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Sugus",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Sugus",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos TicTac M",
    "categoryId": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "TicTac",
    "price": 878,
    "variety": "Menta ",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Bubbaloo M",
    "categoryId": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bubaloo",
    "price": 878,
    "variety": "Menta ",
    "stock": 25,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Bubaloo TF",
    "categoryId": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bubaloo",
    "price": 878,
    "variety": "Tutti Frutti ",
    "stock": 60,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Beldent M",
    "categoryId": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Beldent",
    "price": 878,
    "variety": "Menta ",
    "stock": 70,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Topline",
    "categoryId": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Topline",
    "price": 878,
    "variety": "Sandia ",
    "stock": 30,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Aguila L",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Aguila",
    "price": 878,
    "variety": "Leche ",
    "stock": 100,
    "vegan": false,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Fort aireado CH",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Fort",
    "price": 878,
    "variety": "chocolate ",
    "stock": 20,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Coffler Block CH",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Coffler",
    "price": 878,
    "variety": "Block ",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Shot",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Shot",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "gomitas Moras Mogul ",
    "categoryId": 8,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Mogul",
    "price": 878,
    "variety": "Moras ",
    "stock": 65,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Tita Terrabusi",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Terrabusi",
    "price": 878,
    "variety": "Tita ",
    "stock": 43,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Tres Sueños",
    "categoryId": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "cadbury",
    "price": 878,
    "variety": "Blanco",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chupetines MrPops",
    "categoryId": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "MrPops",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 43,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Paleta de caramelo Fiestisima",
    "categoryId": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "fiestisima",
    "price": 878,
    "variety": "paletas ",
    "stock": 43,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chupetines Felfort paraguitas",
    "categoryId": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Felfort",
    "price": 878,
    "variety": "Paraguitas ",
    "stock": 100,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Products',products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
