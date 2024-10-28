import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Configurator.scss";

import Chair from "../../components/Chair";
import ConfiguratorMenu from "./ConfiguratorMenu";

const Configurator = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 860);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="configurator">
      <div className="canvas-section">
        <Canvas
          style={
            isSmallScreen
              ? { height: "none", minHeight: "100%" }
              : { height: "none" }
          }
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
      <div className="menu-section">
        <ConfiguratorMenu />
      </div>
    </div>
  );
};

export default Configurator;
