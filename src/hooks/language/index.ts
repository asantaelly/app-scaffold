import React from "react";
import { LanguageContext } from "providers/language";

import english from "language/english.json";
import swahili from "language/swahili.json";

const useLanguage = () => {
  const langContext = React.useContext(LanguageContext);

  if (langContext?.language === "swahili") {
    return swahili;
  }

  return english;
};

export default useLanguage;
