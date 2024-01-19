import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

// * interfaces
export interface ColorContextType {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  backgroundColor: string;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
}

interface IColorProvider {
  children: ReactNode;
}

// * create context

const ColorContext = createContext<ColorContextType | undefined>(undefined);

// * create provider

function ColorProvider({ children }: IColorProvider) {
  // * create provider - states

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("transparent");

  const backgroundColor = color;

  return (
    <ColorContext.Provider
      value={{ color, setColor, backgroundColor, textColor, setTextColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export { ColorProvider, ColorContext };
