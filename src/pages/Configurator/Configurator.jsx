import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Stage, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Configurator.scss";

import Chair from "../../components/Chair";
import ConfiguratorMenu from "./ConfiguratorMenu";

const Loader = () => {
  const { active, progress } = useProgress();
  return active ? (
    <div className="loader">
      <div className="loader-animation"></div>
      <p>Loading... {Math.round(progress)}%</p>
    </div>
  ) : null;
};

const Configurator = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 860);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="configurator">
      <div className="canvas-section" style={{ position: "relative" }}>
        <Canvas
          style={
            isSmallScreen
              ? { height: "none", minHeight: "100%" }
              : { height: "none" }
          }
          camera={{ position: [40, 40, 100] }}
          frameloop="demand"
        >
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
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
