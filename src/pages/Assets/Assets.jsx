import Footer from "../../components/Footer/Footer";
import "./Assets.scss";

const Assets = () => {
  return (
    <div className="assets">
      <div className="assets-list">
        <h1>Assets</h1>
        <div className="asset-section">
          <h3>Chair Model</h3>
          <div className="download-button">GLTF</div>
          <div className="download-button">OBJ</div>
        </div>
        <div className="asset-section">
          <h3>Textures</h3>
          <div className="download-button">Cushion Textures</div>
          <div className="download-button">Structure Textures</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Assets;
