'use strict';
let images = [
  {
    "file": "alfajorFantoche.webp",
    "productId" : 1,
    createdAt: new Date, updatedAt: new Date
  },
  {                   
    "file": "alfajorMilka.webp",
    "productId" : 2,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "alfajorOreo.webp",
    "productId" : 3,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "alfajorPepitos.webp",
    "productId" : 4,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "alfajorTerrabusi.webp",
    "productId" : 5,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "bombones-BonOBon.webp",
    "productId" : 6,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "bombonesArcor.webp",
    "productId" : 7,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "bombonesFerreroRocher.webp",
    "productId" : 8,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "bombonesHamlet.webp",
    "productId" : 9,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "bombonesSurtidos-BEL.webp",
    "productId" : 10,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "carameloFlynnPaff.webp",
    "productId" : 11,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "caramelosArcor.webp",
    "productId" : 12,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "caramelosLaYapa-Billiken.webp",
    "productId" : 13,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "caramelosMisky.webp",
    "productId" : 14,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "caramelosSugus.webp",
    "productId" : 15,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "caramelosTicTacmenta.webp",
    "productId" : 16,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "chicleBubbaloo.webp",
    "productId" : 17,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "chicleBubaloo.webp",
    "productId" : 18,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "chicleBeldent.webp",
    "productId" : 19,
    createdAt: new Date, updatedAt: new Date
  },
  {
    "file": "chicleToplineSandia.webp",
    "productId" : 20,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateAguila-chips.webp",
    "productId" : 21,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateAireado-Fort.webp",
    "productId" : 22,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateCofler.webp",
    "productId" : 23,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateShot.webp",
    "productId" : 24,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "gomitasMoras-Mogul.webp",
    "productId" : 25,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateTita-Terrabusi.webp",
    "productId" : 26,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chocolateTresSueños-Mendelez.webp",
    "productId" : 27,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chupetinMrPops.webp",
    "productId" : 28,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chupetinPaletaDeCaramelo-fiestissima.webp",
    "productId" : 29,
    createdAt: new Date, updatedAt: new Date
  },
  {
   
    "file": "chupetinParaguitas-Felfort.webp",
    "productId" : 30,
    createdAt: new Date, updatedAt: new Date
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Images', images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
