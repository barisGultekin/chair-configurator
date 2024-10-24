import { Suspense, useRef } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Configurator.scss";

import Chair from "../../components/Chair";
import ConfiguratorMenu from "./ConfiguratorMenu";

const Configurator = () => {
  const canvasRef = useRef();

  return (
    <div className="configurator">
      <div className="canvas-box" ref={canvasRef}>
        <Canvas
          camera={{ position: [40, 40, 100] }}
          frameloop="demand"
        >
          <Suspense fallback={null}>
            <Stage preset={"soft"} intensity={0} shadows="contact">
              <Chair />
            </Stage>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              maxPolarAngle={Math.PI / 2}
              minDistance={50}
              maxDistance={150}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="config-section">
        <ConfiguratorMenu />
      </div>
    </div>
  );
};

export default Configurator;