'use strict';

let products = [
  {
    "name": "Alfajor Fantoche CH",
    "category_id": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Fantoche",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Alfajor Milka DL",
    "category_id": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Milka",
    "price": 878,
    "variety": "Dulce de leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Alfajor Oreo V",
    "category_id": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Oreo",
    "price": 878,
    "variety": "Vainilla ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Alfajor Pepitos CH",
    "category_id": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Pepitos",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Alfajor Terrabusi CH",
    "category_id": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Terrabusi",
    "price": 878,
    "variety": "chocolate con dulce de leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Bombones Bon o Bon CH",
    "category_id": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bon o Bon",
    "price": 878,
    "variety": "CHocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Bombones Arcor",
    "category_id": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "dfg",
    "price": 878,
    "variety": "Surtidos",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Bombones Ferrero Rocher CH",
    "category_id": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Ferrero Rocher",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Bombones Hamlet L",
    "category_id": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Hamlet",
    "price": 878,
    "variety": "Leche ",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Bombones BEL",
    "category_id": 9,
    "info": "lorem ipsum dolor amet sit",
    "mark": "BEL",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 30,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Caramelos Flynn Paff TF",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Flynn Paff",
    "price": 878,
    "variety": "Tutti-frutti ",
    "stock": 105,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Caramelos Arcor",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Arcor",
    "price": 878,
    "variety": "lldskfjdskl ",
    "stock": 95,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Caramelos La Yapa",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "La Yapa",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Caramelos Misky",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Misky",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 60,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Caramelos Sugus",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Sugus",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": true,
    "celiac": false
  },
  {
    "name": "Caramelos TicTac M",
    "category_id": 1,
    "info": "lorem ipsum dolor amet sit",
    "mark": "TicTac",
    "price": 878,
    "variety": "Menta ",
    "stock": 50,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Chicles Bubbaloo M",
    "category_id": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bubaloo",
    "price": 878,
    "variety": "Menta ",
    "stock": 25,
    "vegan": true,
    "celiac": true
  },
  {
    "name": "Chicles Bubaloo TF",
    "category_id": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Bubaloo",
    "price": 878,
    "variety": "Tutti Frutti ",
    "stock": 60,
    "vegan": true,
    "celiac": true
  },
  {
    "name": "Chicles Beldent M",
    "category_id": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Beldent",
    "price": 878,
    "variety": "Menta ",
    "stock": 70,
    "vegan": true,
    "celiac": true
  },
  {
    "name": "Chicles Topline",
    "category_id": 5,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Topline",
    "price": 878,
    "variety": "Sandia ",
    "stock": 30,
    "vegan": true,
    "celiac": true
  },
  {
    "name": "Chocolates Aguila L",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Aguila",
    "price": 878,
    "variety": "Leche ",
    "stock": 100,
    "vegan": false,
    "celiac": true
  },
  {
    "name": "Chocolates Fort aireado CH",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Fort",
    "price": 878,
    "variety": "chocolate ",
    "stock": 20,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Chocolates Coffler Block CH",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Coffler",
    "price": 878,
    "variety": "Block ",
    "stock": 50,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Chocolates Shot",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Shot",
    "price": 878,
    "variety": "Chocolate ",
    "stock": 50,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "gomitas Moras Mogul ",
    "category_id": 8,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Mogul",
    "price": 878,
    "variety": "Moras ",
    "stock": 65,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Chocolates Tita Terrabusi",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Terrabusi",
    "price": 878,
    "variety": "Tita ",
    "stock": 43,
    "vegan": true,
    "celiac": false
  },
  {
    "name": "Chocolates Tres Sueños",
    "category_id": 2,
    "info": "lorem ipsum dolor amet sit",
    "mark": "cadbury",
    "price": 878,
    "variety": "Blanco",
    "stock": 43,
    "vegan": false,
    "celiac": false
  },
  {
    "name": "Chupetines MrPops",
    "category_id": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "MrPops",
    "price": 878,
    "variety": "Surtidos ",
    "stock": 43,
    "vegan": true,
    "celiac": false
  },
  {
    "name": "Paleta de caramelo Fiestisima",
    "category_id": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "fiestisima",
    "price": 878,
    "variety": "paletas ",
    "stock": 43,
    "vegan": true,
    "celiac": true
  },
  {
    "name": "Chupetines Felfort paraguitas",
    "category_id": 7,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Felfort",
    "price": 878,
    "variety": "Paraguitas ",
    "stock": 100,
    "vegan": true,
    "celiac": true
  }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('products', null, {});
  
  }
};
