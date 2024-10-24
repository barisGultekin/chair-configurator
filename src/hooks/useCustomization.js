// src/hooks/useCustomization.js

import { useContext } from "react";
import { CustomizationContext } from "../contexts/Customization"; // adjust the path if needed

export const useCustomization = () => {
  const context = useContext(CustomizationContext);

  if (!context) {
    throw new Error(
      "useCustomization must be used within a CustomizationProvider"
    );
  }

  return context;
};