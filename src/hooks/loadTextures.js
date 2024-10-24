import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// Utility function to load brushed-steel textures
export const useBrushedSteelTextures = () => {
  const brushedSteelTextureProps = useTexture({
    map: "/textures/brushed-steel/metal_0026_color_2k.jpg",
    normalMap: "/textures/brushed-steel/metal_0026_normal_opengl_2k.png",
    roughnessMap: "/textures/brushed-steel/metal_0026_roughness_2k.jpg",
    aoMap: "/textures/brushed-steel/metal_0026_ao_2k.jpg",
  });

  const brushedSteelRepeater = 0.08;
  brushedSteelTextureProps.map.repeat.set(brushedSteelRepeater, brushedSteelRepeater);
  brushedSteelTextureProps.normalMap.repeat.set(brushedSteelRepeater, brushedSteelRepeater);
  brushedSteelTextureProps.roughnessMap.repeat.set(brushedSteelRepeater, brushedSteelRepeater);
  brushedSteelTextureProps.aoMap.repeat.set(brushedSteelRepeater, brushedSteelRepeater);

  // Set wrapping for all textures
  brushedSteelTextureProps.map.wrapS = brushedSteelTextureProps.map.wrapT = THREE.RepeatWrapping;
  brushedSteelTextureProps.normalMap.wrapS = brushedSteelTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  brushedSteelTextureProps.roughnessMap.wrapS = brushedSteelTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  brushedSteelTextureProps.aoMap.wrapS = brushedSteelTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  // Return the textures along with metalness
  return {
    ...brushedSteelTextureProps,
    metalness: 0.7,  // Set metalness to a high value, you can adjust as needed
    roughness: 0.4,  // Adjust roughness if necessary
  };
};

export const useCarbonTextures = () => {
  const carbonTextureProps = useTexture({
    map: "/textures/carbon-fiber/metal_0047_color_2k.jpg",
    normalMap: "/textures/carbon-fiber/metal_0047_normal_opengl_2k.png",
    roughnessMap: "/textures/carbon-fiber/metal_0047_roughness_2k.jpg",
    aoMap: "/textures/carbon-fiber/metal_0047_ao_2k.jpg",
  });

  const carbonRepeater = 0.1;
  carbonTextureProps.map.repeat.set(carbonRepeater, carbonRepeater);
  carbonTextureProps.normalMap.repeat.set(carbonRepeater, carbonRepeater);
  carbonTextureProps.roughnessMap.repeat.set(carbonRepeater, carbonRepeater);
  carbonTextureProps.aoMap.repeat.set(carbonRepeater, carbonRepeater);

  carbonTextureProps.map.wrapS = carbonTextureProps.map.wrapT = THREE.RepeatWrapping;
  carbonTextureProps.normalMap.wrapS = carbonTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  carbonTextureProps.roughnessMap.wrapS = carbonTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  carbonTextureProps.aoMap.wrapS = carbonTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return {
    ...carbonTextureProps,
    metalness: 0.9,  // Set metalness to a high value, you can adjust as needed
    roughness: 0.5,  // Adjust roughness if necessary
  };
};

// Utility function to load fabric-mesh textures
export const useFabricMeshTextures = () => {
  const fabricMeshTextureProps = useTexture({
    normalMap: "/textures/fabric-mesh/Fabric_Mesh_001_normal.jpg",
    roughnessMap: "/textures/fabric-mesh/Fabric_Mesh_001_roughness.jpg",
    aoMap: "/textures/fabric-mesh/Fabric_Mesh_001_ambientOcclusion.jpg",
  });

  const fabricMeshRepeater = 0.015;
  fabricMeshTextureProps.normalMap.repeat.set(fabricMeshRepeater, fabricMeshRepeater);
  fabricMeshTextureProps.roughnessMap.repeat.set(fabricMeshRepeater, fabricMeshRepeater);
  fabricMeshTextureProps.aoMap.repeat.set(fabricMeshRepeater, fabricMeshRepeater);

  fabricMeshTextureProps.normalMap.wrapS = fabricMeshTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricMeshTextureProps.roughnessMap.wrapS = fabricMeshTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricMeshTextureProps.aoMap.wrapS = fabricMeshTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return fabricMeshTextureProps;
};

// Utility function to load fabric-seam textures
export const useFabricSeamTextures = () => {
  const fabricSeamTextureProps = useTexture({
    normalMap: "/textures/fabric-seam/Fabric_Knitted_004_normal.jpg",
    roughnessMap: "/textures/fabric-seam/Fabric_Knitted_004_roughness.jpg",
    aoMap: "/textures/fabric-seam/Fabric_Knitted_004_ambientOcclusion.jpg",
  });

  const fabricSeamRepeater = 0.02;
  fabricSeamTextureProps.normalMap.repeat.set(fabricSeamRepeater, fabricSeamRepeater);
  fabricSeamTextureProps.roughnessMap.repeat.set(fabricSeamRepeater, fabricSeamRepeater);
  fabricSeamTextureProps.aoMap.repeat.set(fabricSeamRepeater, fabricSeamRepeater);

  fabricSeamTextureProps.normalMap.wrapS = fabricSeamTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricSeamTextureProps.roughnessMap.wrapS = fabricSeamTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricSeamTextureProps.aoMap.wrapS = fabricSeamTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return fabricSeamTextureProps;
};

// Utility function to load alcantara textures
export const useAlcantaraTextures = () => {
  const alcantaraTextureProps = useTexture({
    normalMap: "/textures/alcantara/Fabric_Alcantara_001_normal.jpg",
    roughnessMap: "/textures/alcantara/Fabric_Alcantara_001_roughness.jpg",
    aoMap: "/textures/alcantara/Fabric_Alcantara_001_ambientOcclusion.jpg",
  });

  const alcantaraRepeater = 0.02;
  alcantaraTextureProps.normalMap.repeat.set(alcantaraRepeater, alcantaraRepeater);
  alcantaraTextureProps.roughnessMap.repeat.set(alcantaraRepeater, alcantaraRepeater);
  alcantaraTextureProps.aoMap.repeat.set(alcantaraRepeater, alcantaraRepeater);

  alcantaraTextureProps.normalMap.wrapS = alcantaraTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  alcantaraTextureProps.roughnessMap.wrapS = alcantaraTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  alcantaraTextureProps.aoMap.wrapS = alcantaraTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return alcantaraTextureProps;
};

// Utility function to load leather textures
export const useLeatherTextures = () => {
  const leatherTextureProps = useTexture({
    normalMap: "/textures/leather/Leather_Padded_003_normal.png",
    roughnessMap: "/textures/leather/Leather_Padded_003_roughness.png",
    aoMap: "/textures/leather/Leather_Padded_003_ambientOcclusion.png",
  });

  const leatherRepeater = 0.08;
  leatherTextureProps.normalMap.repeat.set(leatherRepeater, leatherRepeater);
  leatherTextureProps.roughnessMap.repeat.set(leatherRepeater, leatherRepeater);
  leatherTextureProps.aoMap.repeat.set(leatherRepeater, leatherRepeater);

  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return leatherTextureProps;
};

// Utility function to load plastic textures
export const usePlasticTextures = () => {
  const plasticTextureProps = useTexture({
    normalMap: "/textures/plastic/Plastic_Rough_001_normal.jpg",
    roughnessMap: "/textures/plastic/Plastic_Rough_001_roughness.jpg",
    aoMap: "/textures/plastic/Plastic_Rough_001_ambientOcclusion.jpg",
  });

  const plasticRepeater = 0.1;
  plasticTextureProps.normalMap.repeat.set(plasticRepeater, plasticRepeater);
  plasticTextureProps.roughnessMap.repeat.set(plasticRepeater, plasticRepeater);
  plasticTextureProps.aoMap.repeat.set(plasticRepeater, plasticRepeater);

  plasticTextureProps.normalMap.wrapS = plasticTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  plasticTextureProps.roughnessMap.wrapS = plasticTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  plasticTextureProps.aoMap.wrapS = plasticTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return plasticTextureProps;
};