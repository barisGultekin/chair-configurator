import Footer from "../../components/Footer/Footer";
import "./Assets.scss";

const Assets = () => {
  return (
    <div className="assets">
      <div className="assets-content">
        <div className="assets-header">
          <h1>Assets</h1>
          <p>You can download the assets used for this projects from here.</p>
        </div>

        <div className="assets-list">
          <div className="asset-section">
            <h3>Chair Model</h3>
            <a href={`${import.meta.env.BASE_URL}assets/models/chair.gltf`} download className="download-button">
              Download GLTF
            </a>
          </div>
          <div className="asset-section">
            <h3>Textures</h3>
            <div className="asset-subsection">
              <p className="subsection-title">CUSHION TEXTURES</p>
              <a href={`${import.meta.env.BASE_URL}assets/textures/downloads/alcantara.zip`}  download className="download-button">
                Download Alcantara
              </a>
            </div>
            <div className="asset-subsection">Structure Textures</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Assets;
