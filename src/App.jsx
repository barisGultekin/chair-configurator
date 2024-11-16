import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { CustomizationProvider } from "./contexts/Customization";

import Home from "./pages/Home/Home";
import Configurator from "./pages/Configurator/Configurator";
import Assets from "./pages/Assets/Assets";

import Navbar from "./components/Navbar/Navbar";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

function App() {
  const [isScrolledPastAnimation, setIsScrolledPastAnimation] = useState(false);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastAnimation(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (contentSectionRef.current) {
      observer.observe(contentSectionRef.current);
    }

    return () => {
      if (contentSectionRef.current) {
        observer.unobserve(contentSectionRef.current);
      }
    };
  }, []);

  return (
    <CustomizationProvider>
      <Router>
        <div className="app">
          <Navbar isScrolledPastAnimation={isScrolledPastAnimation} />
          <Routes>
            <Route
              path="/"
              element={<Home contentSectionRef={contentSectionRef} />}
            />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/assets" element={<Assets />} />
          </Routes>
        </div>
      </Router>
    </CustomizationProvider>
  );
}

export default App;
