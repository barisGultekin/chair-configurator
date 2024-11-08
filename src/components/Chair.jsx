/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";

import { useGLTF } from "@react-three/drei";

import { useCustomization } from "../hooks/useCustomization";

import {
  useAlcantaraTextures,
  useBrushedSteelTextures,
  useCarbonTextures,
  useFabricMeshTextures,
  useFabricSeamTextures,
  useLeatherTextures,
  usePlasticTextures,
} from "../hooks/loadTextures";

const Chair = (props) => {
  const { state, dispatch } = useCustomization(); // Access state
  
  const { cushionMaterial, cushionColor, armrestType, bodyTexture } = state;

  const { nodes } = useGLTF(`${import.meta.env.BASE_URL}models/chair.gltf`);

  // Load textures for each material
  const alcantaraTextureProps = useAlcantaraTextures();
  const brushedSteelTextureProps = useBrushedSteelTextures();
  const carbonTextureProps = useCarbonTextures();
  const fabricMeshTextureProps = useFabricMeshTextures();
  const fabricSeamTextureProps = useFabricSeamTextures();
  const leatherTextureProps = useLeatherTextures();
  const plasticTextureProps = usePlasticTextures();

  // Define a texture mapping based on the cushion material
  const cushionTextures = {
    dummy: plasticTextureProps,
    Alcantara: alcantaraTextureProps,
    Leather: leatherTextureProps,
    MeshFabric: fabricMeshTextureProps,
    Fabric: fabricSeamTextureProps,
  };

  let selectedCushionTexture = cushionTextures[cushionMaterial];

  useEffect(() => {
    if (cushionMaterial === "dummy") {
      dispatch({ type: "SET_CUSHION_MATERIAL", payload: "Fabric" });
    }
  }, [cushionMaterial, dispatch]);

  return (
    <group {...props} dispose={null} position={[0, -40, 0]}>
      {/* LEGS BOTTOM */}
      <mesh geometry={nodes.legsBottom.geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>

      {/* LEGS TOP */}
      <mesh geometry={nodes.legsTop.geometry}>
      <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>

      {/* WHEELS */}
      <mesh geometry={nodes.wheel.geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes.wheel1.geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes.wheel2.geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes.wheel3.geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes.wheel4.geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>

      {/* ARMREST STEM */}
      <mesh geometry={nodes["armrest-stem"].geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>
      <mesh geometry={nodes["armrest-stem1"].geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>

      {/* ARMREST JOINTS */}
      <mesh geometry={nodes["armrest-joint-l"].geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>
      <mesh geometry={nodes["armrest-joint-r"].geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>

      {/* MAIN JOINT */}
      <mesh geometry={nodes["main-joint"].geometry}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>

      {/* CUSHION */}
      <mesh geometry={nodes.cushion.geometry}>
        <meshStandardMaterial
          {...selectedCushionTexture}
          color={cushionColor?.color || "#FFF"}
        />
      </mesh>

      {/* ARMREST CUSHION */}
      <mesh geometry={nodes["armrest-cushion"].geometry}>
        <meshStandardMaterial
          {...selectedCushionTexture}
          color={cushionColor?.color || "#FFF"}
          visible={armrestType === "cushioned"}
        />
      </mesh>
      <mesh geometry={nodes["armrest-cushion1"].geometry}>
        <meshStandardMaterial
          {...selectedCushionTexture}
          color={cushionColor?.color || "#FFF"}
          visible={armrestType === "cushioned"}
        />
      </mesh>

      {/* ARMRESTS */}
      <mesh geometry={nodes["armrest-cushioned"].geometry} visible={armrestType === "cushioned"}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes["armrest-cushioned1"].geometry} visible={armrestType === "cushioned"}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>

      <mesh geometry={nodes["armrest-solid"].geometry} visible={armrestType === "solid"}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>
      <mesh geometry={nodes["armrest-solid1"].geometry} visible={armrestType === "solid"}>
        <meshStandardMaterial {...plasticTextureProps} color={"#585858"} />
      </mesh>


      {/* BACKREST STEM */}
      <mesh geometry={nodes["backrest-stem"].geometry}>
        <meshStandardMaterial {...(bodyTexture === "aluminum" ? brushedSteelTextureProps : carbonTextureProps)} />
      </mesh>

      {/* BACKREST */}
      <mesh geometry={nodes["backrest-body"].geometry}>
        <meshStandardMaterial
          {...selectedCushionTexture}
          color={cushionColor?.color || "#FFF"}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/chair.gltf`);

export default Chair;
