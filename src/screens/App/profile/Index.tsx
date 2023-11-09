import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import useLanguage from "hooks/language";
import AppLayout from "layouts/App/AppLayout";
import useColors from "hooks/themes/useColors";
import { Colors } from "schemas/themes/Colors";
import AppText from "components/lib/text/AppText";

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
