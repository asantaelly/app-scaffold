import React from "react";
import LanguageProvider from "./language";

type AppProp = {
  children: React.ReactNode;
};

const AppContext: React.FC<AppProp> = (props) => {
  const { children } = props;

  return <LanguageProvider>{children}</LanguageProvider>;
};

export default AppContext;
