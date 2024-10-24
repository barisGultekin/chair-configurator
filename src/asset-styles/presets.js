import { fabricColors, alcantaraColors, leatherColors } from './colors';

export const presets = {
  spaceShuttle: {
    cushionMaterial: 'MeshFabric',
    cushionColor: fabricColors[0],
    armrestType: "cushioned",
    bodyTexture: "carbon"
  },
  darkLeather: {
    cushionMaterial: 'Leather',
    cushionColor: leatherColors[1],
    armrestType: "solid",
    bodyTexture: "aluminum"
  },
  modernAlcantara: {
    cushionMaterial: 'Alcantara',
    cushionColor: alcantaraColors[0],
    armrestType: "cushioned",
    bodyTexture: "aluminum"
  },
  racer: {
    cushionMaterial: 'Alcantara',
    cushionColor: alcantaraColors[2],
    armrestType: "cushioned",
    bodyTexture: "carbon"
  }
};