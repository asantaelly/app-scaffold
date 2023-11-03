import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import useLanguage from "src/hooks/language";
import AppLayout from "src/layouts/App/AppLayout";
import useColors from "src/hooks/themes/useColors";
import { Colors } from "src/schemas/themes/Colors";
import AppText from "src/components/lib/text/AppText";

type Props = {};

const Profile = () => {
  const lang = useLanguage();
  const colors = useColors();

  const styles = Styles(colors);

  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText>{lang.app.profile.title}</AppText>
    </AppLayout>
  );
};

export default Profile;

const Styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background.primary,
    },
  });
