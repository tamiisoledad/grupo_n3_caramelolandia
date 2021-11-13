'use strict';
let products = [
  {
    "name": "Alfajor Fantoche CH (Pack X24u)",
    "categoryId": 3,
    "info": "Alfajor Fantoche Triple Chocolate. Alfajor relleno con dulce de leche cubierto con baño de repostería de chocolate.",
    "mark": "Fantoche",
    "price": 1300,
    "variety": "Chocolate ",
    "stock": 98,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Milka Ddl Leche Tri (pack 10u)",
    "categoryId": 3,
    "info": "Tamaño de la Porción ,1 alfajor (70g);Energía: 1109 kj; 265 kcal; Carbohidratos: 42,00g; Azúcar:32,00g; Proteína: 4,60g; Grasa: 8,50g; Grasa Saturada;4,700g;Grasa Trans:0,300g; Fibra:0.8g; sodio:112mg;",
    "mark": "Milka",
    "price": 950,
    "variety": "Dulce de leche ",
    "stock": 115,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Oreo Triple X10u",
    "categoryId": 3,
    "info": "lorem ipsum dolor amet sit",
    "mark": "Oreo",
    "price": 870,
    "variety": "Vainilla ",
    "stock": 255,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Alfajor Pepito Triple X10u",
    "categoryId": 3,
    "info": "Alfajor de mousse de chocolate de tres capas con chips de chocolate puro.",
    "mark": "Pepitos",
    "price": 850,
    "variety": "Chocolate ",
    "stock": 43,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "10 Alfajores Triple Terrabusi X 70g",
    "categoryId": 3,
    "info": "Alfajor de tres tapas relleno con dulce de leche con baño de repostería.",
    "mark": "Terrabusi",
    "price": 850,
    "variety": "chocolate con dulce de leche ",
    "stock": 125,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "BON O BON CLÁSICO 30u.",
    "categoryId": 9,
    "info": "Bombón de chocolate blanco y oblea con leche relleno con pasta de maní. Caja x 450 gr. Porción = 15 g | Unidades por porción = 1 BOMBÓN",
    "mark": "Bon o Bon",
    "price": 690,
    "variety": "Chocolate ",
    "stock": 98,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "BOMBONES ARCOR SELECCION 258gr",
    "categoryId": 9,
    "info": "surtido de bombones marca Arcor",
    "mark": "dfg",
    "price": 500,
    "variety": "Surtidos",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Ferrero Rocher Rosher Bombón 01mercado Ideal Regalo Caja X12",
    "categoryId": 9,
    "info": "Chocolates Ferrero Rocher. Avellana crujiente en el centro, delicioso relleno de crema de avellanas, galleta crujiente cubierta con chocolate y avellanas finamente tostadas.",
    "mark": "Ferrero Rocher",
    "price": 800,
    "variety": "Chocolate ",
    "stock": 95,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones Hamlet ",
    "categoryId": 9,
    "info": "Bombones rellenos de crema de mani ,bañados en chocolate amargo",
    "mark": "Hamlet",
    "price": 450,
    "variety": "Leche ",
    "stock": 98,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Bombones BEL",
    "categoryId": 9,
    "info": "Surtidos seleccionados por la marca BEL",
    "mark": "BEL",
    "price": 450,
    "variety": "Surtidos ",
    "stock": 30,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Masticables Flynn Paff tutti-fruti Caja X70 Unidades",
    "categoryId": 1,
    "info": "Caramelos Masticables con Sabor a tutti-frutti.",
    "mark": "Flynn Paff",
    "price": 450,
    "variety": "Tutti-frutti ",
    "stock": 105,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelo Masticable Frutal Arcor 800g",
    "categoryId": 1,
    "info": "Caramelos surtidos seleccionados por la marca Arcor,libre de gluten",
    "mark": "Arcor",
    "price": 440,
    "variety": "lldskfjdskl ",
    "stock": 95,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Pastillas La Yapa Billiken Sabores Frutales 36 Paquetes",
    "categoryId": 1,
    "info": "pastillas frutales surtidas , seleccionadas por la marca Billiken",
    "mark": "billiken",
    "price": 440,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Misky",
    "categoryId": 1,
    "info": "Caramelo Masticable Frutal Misky 800g",
    "mark": "Misky",
    "price": 310,
    "variety": "Surtidos ",
    "stock": 111,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos Sugus",
    "categoryId": 1,
    "info": "Caramelos Sugus Masticables Frutales 700 Gramos.",
    "mark": "Sugus",
    "price": 580,
    "variety": "Surtidos ",
    "stock": 205,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Caramelos TicTac",
    "categoryId": 1,
    "info": "Pastillas De Menta Tic Tac X 16 Gramos",
    "mark": "TicTac",
    "price": 550,
    "variety": "Menta ",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Bubbaloo M",
    "categoryId": 5,
    "info": "Chicles Menta x60u.  Bubbaloo",
    "mark": "Bubaloo",
    "price": 600,
    "variety": "Menta ",
    "stock": 50,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Bubaloo TF",
    "categoryId": 5,
    "info": "Chicles  sabor tutti-frutti x60u.  Bubbaloo",
    "mark": "Bubaloo",
    "price": 600,
    "variety": "Tutti Frutti ",
    "stock": 60,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Beldent M",
    "categoryId": 5,
    "info": "20 Chicles Beldent sabor menta",
    "mark": "Beldent",
    "price": 870,
    "variety": "Menta ",
    "stock": 70,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chicles Topline S",
    "categoryId": 5,
    "info": "Chicle Topline X20 Unidades sabor sandia",
    "mark": "Topline",
    "price": 480,
    "variety": "Sandia ",
    "stock": 30,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Aguila L",
    "categoryId": 2,
    "info": "Chips De Chocolate Blanco Aguila Gotas Chocolitos • Contenido neto: 150g Cantidad: 1",
    "mark": "Aguila",
    "price": 280,
    "variety": "Leche ",
    "stock": 100,
    "vegan": false,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Espacial Fort Chocolate Aireado X 20 Unidades",
    "categoryId": 2,
    "info": "Sabor	Chocolate; ormato de venta	Pack; Unidades por pack	20; Unidades por envase	1; Peso de la unidad	24 g",
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
    "info": "Chocolate Cofler Block 38gr Promo X 10uni",
    "mark": "Coffler",
    "price": 550,
    "variety": "Block ",
    "stock": 98,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Shot",
    "categoryId": 2,
    "info": "Chocolate Shot 170gr; Ingrediente destacado:Chocolate con Mani; Es libre de gluten:No",
    "mark": "Shot",
    "price": 380,
    "variety": "Chocolate ",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "gomitas Moras Mogul ",
    "categoryId": 8,
    "info": "Mogul Moras X 500 Gramos Gomita Golosina",
    "mark": "Mogul",
    "price": 550,
    "variety": "Moras ",
    "stock": 152,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Tita",
    "categoryId": 2,
    "info": "Chocolate Tita Caja X 36 U X 22 Gr",
    "mark": "Terrabusi",
    "price": 1300,
    "variety": "Tita ",
    "stock": 60,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chocolates Tres Sueños",
    "categoryId": 2,
    "info": "Chocolate Cadbury Tres Sueños Caja X12 Unidades; Peso de la unidad	288 g; Ingrediente destacado:Cacao, leche; Es libre de glute:No ",
    "mark": "cadbury",
    "price": 1000,
    "variety": "Blanco",
    "stock": 50,
    "vegan": false,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chupetines MrPops",
    "categoryId": 7,
    "info": "Chupetin Mr Pop Frutal Arcor X50 U; Es libre de gluten:Sí",
    "mark": "MrPops",
    "price": 390,
    "variety": "Surtidos ",
    "stock": 100,
    "vegan": true,
    "celiac": false,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Paleta de caramelo ",
    "categoryId": 7,
    "info": "30 Chupetines Paletas Caramelo 9 Cm Fiestissima",
    "mark": "fiestisima",
    "price": 1010,
    "variety": "paletas ",
    "stock": 43,
    "vegan": true,
    "celiac": true,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "name": "Chupetines Felfort paraguitas",
    "categoryId": 7,
    "info": "Paraguitas De Chocolate Felfort  X10 U; Peso de la unida:13 g",
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
