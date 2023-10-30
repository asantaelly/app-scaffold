import React from "react";
import { StyleSheet, View } from "react-native";

import useLanguage from "src/hooks/language";
import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";
import { LanguageContext } from "src/contexts/language";
import AppButton from "src/components/lib/button/AppButton";

type Props = {};

const Settings = () => {
  const lang = useLanguage();

  /** language context */
  const langContext = React.useContext(LanguageContext);

  const changeLanguage = React.useCallback(
    (language: string) => {
      langContext?.setLanguage(language);
    },
    [langContext?.language]
  );

  const englishBtnStyle =
    langContext?.language === "english"
      ? styles.activeStyle
      : styles.inactiveStyle;

  const swahiliBtnStyle =
    langContext?.language === "swahili"
      ? styles.activeStyle
      : styles.inactiveStyle;

  return (
    <AppLayout safeArea={false} style={styles.container}>
      <View>
        <AppText>{lang.app.settings.title}</AppText>
        <View style={[styles.buttonContainer]}>
          <AppButton
            title="english"
            style={[englishBtnStyle]}
            onPress={() => changeLanguage("english")}
          >
            English
          </AppButton>

          <AppButton
            title="swahili"
            style={[swahiliBtnStyle]}
            onPress={() => changeLanguage("swahili")}
          >
            Swahili
          </AppButton>
        </View>
      </View>
    </AppLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    columnGap: 30,
    flexDirection: "row",
  },
  activeStyle: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  inactiveStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
