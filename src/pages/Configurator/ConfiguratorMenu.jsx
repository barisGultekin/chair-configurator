import "./Configurator.scss";
import "./ConfiguratorMenu.scss";

import { useEffect, useState } from "react";

import { useCustomization } from "../../hooks/useCustomization";
import { presets } from "../../asset-styles/presets";

import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ConfiguratorMenu = () => {
  const { state, dispatch } = useCustomization();
  const {
    cushionMaterial,
    cushionColor,
    availableCushionColors,
    armrestType,
    bodyTexture,
  } = state;

  const [currentPreset, setCurrentPreset] = useState(null);
  const [showPresets, setShowPresets] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    "Presets",
    "Armrests",
    "Cushion Material",
    "Cushion Color",
    "Structure",
  ];

  useEffect(() => {
    // Listen for window resize and determine if mobile view should be applied
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size on the first render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const applyPreset = (preset) => {
    dispatch({ type: "SET_PRESET", payload: preset });
    setCurrentPreset(preset);
  };

  const materialDisplayNames = {
    Fabric: "Woven Fabric",
    MeshFabric: "Meshed Fabric",
    Alcantara: "Alcantara",
    Leather: "Leather",
  };

  const handleNextStage = () => {
    setCurrentStage((prevStage) => Math.min(prevStage + 1, stages.length - 1));
  };

  const handlePrevStage = () => {
    setCurrentStage((prevStage) => Math.max(prevStage - 1, 0));
  };

  return (
    <div className="menu-wrapper">
      <div className="menu">
        <div className="header">
          <h1>Configure Your Chair</h1>
          <p>Design a chair for your personal needs.</p>
        </div>

        {isMobile && (
          <div className="stage-navigation-wrapper">
            <div className="stage-navigation">
              <button onClick={handlePrevStage} disabled={currentStage === 0}>
                <FaChevronLeft />
              </button>
              <span>{stages[currentStage]}</span>
              <button
                onClick={handleNextStage}
                disabled={currentStage === stages.length - 1}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        <div className="sections">
          {(!isMobile || currentStage === 0) && (
            <div className="section">
              <div className="header">
                <div className="section-title">
                  <h3>Presets</h3>
                  <button
                    className={`section-toggle ${showPresets ? "open" : ""}`}
                    onClick={() => setShowPresets(!showPresets)}
                  >
                    <FaChevronDown />
                  </button>
                </div>
                <p>Pick a carefully designed preset.</p>
              </div>
              {(isMobile || showPresets) && (
                <div className="section-list-wrapper">
                  <div className="section-list text-list">
                    <div
                      className={`text-select ${
                        currentPreset === presets.spaceShuttle ? "active" : ""
                      }`}
                      onClick={() => applyPreset(presets.spaceShuttle)}
                    >
                      Space Shuttle
                    </div>
                    <div
                      className={`text-select ${
                        currentPreset === presets.darkLeather ? "active" : ""
                      }`}
                      onClick={() => applyPreset(presets.darkLeather)}
                    >
                      Crest Prestige
                    </div>
                    <div
                      className={`text-select ${
                        currentPreset === presets.modernAlcantara
                          ? "active"
                          : ""
                      }`}
                      onClick={() => applyPreset(presets.modernAlcantara)}
                    >
                      Mojave
                    </div>
                    <div
                      className={`text-select ${
                        currentPreset === presets.racer ? "active" : ""
                      }`}
                      onClick={() => applyPreset(presets.racer)}
                    >
                      Grand Turismo
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {(!isMobile || currentStage === 1) && (
            <div className="section">
              <h3>Armrests</h3>
              <div className="section-list">
                <div
                  className={`text-select ${
                    armrestType === "solid" ? "active" : ""
                  }`}
                  onClick={() => {
                    dispatch({ type: "SET_ARMREST_TYPE", payload: "solid" });
                    setCurrentPreset(null);
                  }}
                >
                  Solid
                </div>
                <div
                  className={`text-select ${
                    armrestType === "cushioned" ? "active" : ""
                  }`}
                  onClick={() => {
                    dispatch({
                      type: "SET_ARMREST_TYPE",
                      payload: "cushioned",
                    });
                    setCurrentPreset(null);
                  }}
                >
                  Cushioned
                </div>
              </div>
            </div>
          )}

          {(!isMobile || currentStage === 2) && (
            <div className="section">
              <h3>Cushion Material</h3>
              <div className="section-list-wrapper">
                <div className="section-list text-list">
                  {["Fabric", "MeshFabric", "Alcantara", "Leather"].map(
                    (material) => (
                      <div
                        key={material}
                        className={`text-select ${
                          cushionMaterial === material ? "active" : ""
                        }`}
                        onClick={() => {
                          dispatch({
                            type: "SET_CUSHION_MATERIAL",
                            payload: material,
                          });
                          setCurrentPreset(null);
                        }}
                      >
                        {materialDisplayNames[material]}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {(!isMobile || currentStage === 3) && (
            <div className="section">
              <h3>Cushion Color</h3>
              <div className="section-list-wrapper">
                <div className="section-list centered">
                  {availableCushionColors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-select ${
                        color === cushionColor ? "active" : ""
                      }`}
                      onClick={() => {
                        dispatch({ type: "SET_CUSHION_COLOR", payload: color });
                        setCurrentPreset(null);
                      }}
                    >
                      <div className="color-select-indicator">
                        <div
                          className="color-select-dot"
                          style={{ backgroundColor: color.color }}
                        ></div>
                      </div>
                      <div className="color-select-label">{color.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(!isMobile || currentStage === 4) && (
            <div className="section">
              <h3>Structure</h3>
              <div className="section-list-wrapper">
                <div className="section-list centered">
                  <div
                    className={`img-select ${
                      bodyTexture === "aluminum" ? "active" : ""
                    }`}
                    onClick={() => {
                      dispatch({
                        type: "SET_BODY_TEXTURE",
                        payload: "aluminum",
                      });
                      setCurrentPreset(null);
                    }}
                  >
                    <div className="img-select-indicator">
                      <div className="img-select-dot">
                        <img src={`${import.meta.env.BASE_URL}assets/aluminum.webp`} alt="Aluminum" />
                      </div>
                    </div>
                    <div className="img-select-label">Aluminum</div>
                  </div>

                  <div
                    className={`img-select ${
                      bodyTexture === "carbon" ? "active" : ""
                    }`}
                    onClick={() => {
                      dispatch({ type: "SET_BODY_TEXTURE", payload: "carbon" });
                      setCurrentPreset(null);
                    }}
                  >
                    <div className="img-select-indicator">
                      <div className="img-select-dot">
                        <img
                          src={`${import.meta.env.BASE_URL}assets/carbon-fiber.jpg`}
                          alt="Carbon Fiber"
                        />
                      </div>
                    </div>
                    <div className="img-select-label">Carbon Fiber</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorMenu;
