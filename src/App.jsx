import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CustomizationProvider } from "./contexts/Customization";

import Home from "./pages/Home/Home";
import Configurator from "./pages/Configurator/Configurator";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <CustomizationProvider>
      <Router>
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurator" element={<Configurator />} />
          </Routes>
        </div>
      </Router>
    </CustomizationProvider>
  );
}

export default App;
