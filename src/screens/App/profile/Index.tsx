import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import useLanguage from "src/hooks/language";
import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";

type Props = {};

const Profile = () => {
  const lang = useLanguage();
  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText>{lang.app.profile.title}</AppText>
    </AppLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
