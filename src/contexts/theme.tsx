import React from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

type ComponentProps = {
  children: React.ReactNode;
};

type ThemeProps = {
  theme: ColorSchemeName;
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
};

export const ThemeContext = React.createContext<ThemeProps | null>(null);

const ThemeProvider: React.FC<ComponentProps> = (props) => {
  const { children } = props;
  const colorScheme = useColorScheme();

  const defaultTheme = colorScheme ?? "light";
  const [theme, setTheme] = React.useState<ColorSchemeName>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
