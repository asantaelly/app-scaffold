import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme";

import dark_theme from "src/themes/colors/dark";
import light_theme from "src/themes/colors/light";

const useColors = () => {
  const theme = useContext(ThemeContext);

  if (theme?.theme === "dark") {
    return dark_theme;
  }

  return light_theme;
};

export default useColors;
