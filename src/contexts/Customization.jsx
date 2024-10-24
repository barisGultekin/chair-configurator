// src/contexts/Customization.jsx

import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import {
  fabricColors,
  alcantaraColors,
  leatherColors,
} from "../asset-styles/colors";

const initialState = {
  cushionColor: fabricColors[0],
  availableCushionColors: fabricColors,
  cushionMaterial: "dummy",
  bodyTexture: "aluminum",
  armrestType: "solid",
};

const customizationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUSHION_MATERIAL": {
      let availableCushionColors;
      switch (action.payload) {
        case "Fabric":
          availableCushionColors = fabricColors;
          break;
        case "MeshFabric":
          availableCushionColors = fabricColors;
          break;
        case "Alcantara":
          availableCushionColors = alcantaraColors;
          break;
        case "Leather":
          availableCushionColors = leatherColors;
          break;
        default:
          availableCushionColors = fabricColors; // Fallback to fabric colors
      }

      return {
        ...state,
        cushionMaterial: action.payload,
        availableCushionColors,
        cushionColor: availableCushionColors[0], // Reset cushion color when material changes
      };
    }

    case "SET_CUSHION_COLOR":
      return {
        ...state,
        cushionColor: action.payload,
      };

    case "SET_BODY_TEXTURE":
      return {
        ...state,
        bodyTexture: action.payload,
      };

    case "SET_ARMREST_TYPE":
      return {
        ...state,
        armrestType: action.payload,
      };

    case "SET_PRESET":
      return {
        ...state,
        cushionMaterial: action.payload.cushionMaterial,
        cushionColor: action.payload.cushionColor,
        availableCushionColors:
          action.payload.cushionMaterial === "Fabric" ||
          action.payload.cushionMaterial === "MeshFabric"
            ? fabricColors
            : action.payload.cushionMaterial === "Alcantara"
            ? alcantaraColors
            : leatherColors,
        armrestType: action.payload.armrestType || state.armrestType,
        bodyTexture: action.payload.bodyTexture || state.bodyTexture,
      };

    default:
      return state;
  }
};

// Create the context
const CustomizationContext = createContext({});

// Provider component using the reducer
export const CustomizationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customizationReducer, initialState);

  return (
    <CustomizationContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomizationContext.Provider>
  );
};

// PropTypes validation
CustomizationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export both CustomizationContext and CustomizationProvider
export { CustomizationContext };
