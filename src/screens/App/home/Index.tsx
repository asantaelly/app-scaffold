import React from "react";
import { StyleSheet } from "react-native";

import useLanguage from "hooks/language";
import AppLayout from "layouts/App/AppLayout";
import useColors from "hooks/themes/useColors";
import { Colors } from "schemas/themes/Colors";
import AppText from "components/lib/text/AppText";
import AppButton from "components/lib/button/AppButton";

type Props = {};

const Home = () => {
  const lang = useLanguage();
  const colors = useColors();

  const styles = Styles(colors);

  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText style={[styles.titleText]}>{lang.app.home.title}</AppText>
      <AppButton
        title="button"
        style={[{ backgroundColor: colors.background.secondary }]}
      >
        {lang.app.home["button-title"]}
      </AppButton>
    </AppLayout>
  );
};

export default Home;

const Styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background.primary,
    },
    titleText: {
      color: colors.text.secondary,
    },
  });
