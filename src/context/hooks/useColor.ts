import { useContext } from "react";
import { ColorContext, ColorContextType } from "../StyleContext";

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor debe ser utilizado dentro de un ColorProvider");
  }
  return context;
};
