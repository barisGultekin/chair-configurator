/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import "./Configurator.scss";

import { Canvas } from "@react-three/fiber";

import Assembly from "../../components/Assembly";

const Configurator = () => {
  return (
    <div className="configurator">
      <div className="canvas-box">
        <Canvas camera={{ position: [10, 10, 10] }} shadows>
          <mesh>
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={0.4}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              maxPolarAngle={Math.PI / 2}
            />
            
            <Assembly />
          </mesh>
        </Canvas>
      </div>
      <div className="configurator-box">
        <h1>config</h1>
        <p>lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Configurator;
