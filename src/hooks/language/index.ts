import React from "react";
import { LanguageContext } from "src/contexts/language";

import english from "src/language/english.json";
import swahili from "src/language/swahili.json";

const useLanguage = () => {
  const langContext = React.useContext(LanguageContext);

  if (langContext?.language === "swahili") {
    return swahili;
  }

  return english;
};

export default useLanguage;
