import React from "react";
import { StyleSheet, Switch, View } from "react-native";

import useLanguage from "src/hooks/language";
import { ThemeContext } from "src/contexts/theme";
import AppLayout from "src/layouts/App/AppLayout";
import useColors from "src/hooks/themes/useColors";
import { Colors } from "src/schemas/themes/Colors";
import AppText from "src/components/lib/text/AppText";
import { LanguageContext } from "src/contexts/language";
import AppButton from "src/components/lib/button/AppButton";

type Props = {};

const Settings = () => {
  const lang = useLanguage();
  const colors = useColors();

  const styles = Styles(colors);
  const theme = React.useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false);

  /** switch between color themes */
  const handleChangeTheme = React.useCallback(() => {
    setIsEnabled((previousState) => !previousState);

    if (!isEnabled) {
      return theme?.setTheme("dark");
    }
    return theme?.setTheme("light");
  }, [isEnabled]);

  /** language context */
  const langContext = React.useContext(LanguageContext);

  const changeLanguage = React.useCallback(
    (language: string) => {
      langContext?.setLanguage(language);
    },
    [langContext?.language]
  );

  const buttonStyle = (lang: string) => {
    if (langContext?.language === lang) {
      return styles.activeStyle;
    }

    return styles.inactiveStyle;
  };

  return (
    <AppLayout safeArea={false} style={styles.container}>
      <View style={[styles.changeLang]}>
        <AppText>{lang.app.settings["change-language"]}</AppText>
        <View style={[styles.buttonContainer]}>
          <AppButton
            title="english"
            style={[buttonStyle("english")]}
            onPress={() => changeLanguage("english")}
          >
            English
          </AppButton>

          <AppButton
            title="swahili"
            style={[buttonStyle("swahili")]}
            onPress={() => changeLanguage("swahili")}
          >
            Swahili
          </AppButton>
        </View>
      </View>
      <View style={[styles.changeTheme]}>
        <AppText>{lang.app.settings["change-theme"]}</AppText>
        <View>
          <Switch
            value={isEnabled}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleChangeTheme}
            trackColor={{ false: "rgba(0,0, 0, 0.7)", true: "rgba(0,0,0,0.1)" }}
          />
        </View>
      </View>
    </AppLayout>
  );
};

export default Settings;

const Styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      rowGap: 30,
      paddingTop: 20,
      backgroundColor: colors.background.primary,
    },
    changeLang: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonContainer: {
      columnGap: 30,
      flexDirection: "row",
    },
    activeStyle: {
      backgroundColor: colors.background.secondary,
    },
    inactiveStyle: {
      backgroundColor: colors.highlight.secondary,
    },
    changeTheme: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
