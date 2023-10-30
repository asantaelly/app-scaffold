import React from "react";

type ComponentProps = {
  children: React.ReactNode;
};

type LanguageProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const LanguageContext = React.createContext<LanguageProps | null>(null);

const LanguageProvider: React.FC<ComponentProps> = (props) => {
  const { children } = props;

  const [language, setLanguage] = React.useState<string>("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
