import { useContext } from "react";
import { ThemeContext } from "providers/theme";

import dark_theme from "themes/colors/dark";
import light_theme from "themes/colors/light";

const useColors = () => {
  const theme = useContext(ThemeContext);

  if (theme?.theme === "dark") {
    return dark_theme;
  }

  return light_theme;
};

export default useColors;
