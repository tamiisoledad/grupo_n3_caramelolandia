'use strict';

let images = [
  {
   
    "file": "alfajorFantoche.webp",
    "product_id" : 1
  },
  {
   
    "file": "alfajorMilka.webp",
    "product_id" : 2
  },
  {
   
    "file": "alfajorOreo.webp",
    "product_id" : 3
  },
  {
   
    "file": "alfajorPepitos.webp",
    "product_id" : 4
  },
  {
   
    "file": "alfajorTerrabusi.webp",
    "product_id" : 5
  },
  {
   
    "file": "bombones-BonOBon.webp",
    "product_id" : 6
  },
  {
   
    "file": "bombonesArcor.webp",
    "product_id" : 7
  },
  {
   
    "file": "bombonesFerreroRocher.webp",
    "product_id" : 8
  },
  {
   
    "file": "bombonesHamlet.webp",
    "product_id" : 9
  },
  {
   
    "file": "bombonesSurtidos-BEL.webp",
    "product_id" : 10
  },
  {
   
    "file": "carameloFlynnPaff.webp",
    "product_id" : 11
  },
  {
   
    "file": "caramelosArcor.webp",
    "product_id" : 12
  },
  {
   
    "file": "caramelosLaYapa-Billiken.webp",
    "product_id" : 13
  },
  {
   
    "file": "caramelosMisky.webp",
    "product_id" : 14
  },
  {
   
    "file": "caramelosSugus.webp",
    "product_id" : 15
  },
  {
   
    "file": "caramelosTicTacmenta.webp",
    "product_id" : 16
  },
  {
   
    "file": "chicleBubbaloo.webp",
    "product_id" : 17
  },
  {
   
    "file": "chicleBubaloo.webp",
    "product_id" : 18
  },
  {
   
    "file": "chicleBeldent.webp",
    "product_id" : 19
  },
  {
   
    "file": "chicleToplineSandia.webp",
    "product_id" : 20
  },
  {
   
    "file": "chocolateAguila-chips.webp",
    "product_id" : 21
  },
  {
   
    "file": "chocolateAireado-Fort.webp",
    "product_id" : 22
  },
  {
   
    "file": "chocolateCofler.webp",
    "product_id" : 23
  },
  {
   
    "file": "chocolateShot.webp",
    "product_id" : 24
  },
  {
   
    "file": "gomitasMoras-Mogul.webp",
    "product_id" : 25
  },
  {
   
    "file": "chocolateTita-Terrabusi.webp",
    "product_id" : 26
  },
  {
   
    "file": "chocolateTresSueños-Mendelez.webp",
    "product_id" : 27
  },
  {
   
    "file": "chupetinMrPops.webp",
    "product_id" : 28
  },
  {
   
    "file": "chupetinPaletaDeCaramelo-fiestissima.webp",
    "product_id" : 29
  },
  {
   
    "file": "chupetinParaguitas-Felfort.webp",
    "product_id" : 30
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('images', images, {});

  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('images', null, {});
  
  }
};
