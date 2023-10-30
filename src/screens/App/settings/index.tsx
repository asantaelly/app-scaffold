import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import useLanguage from "src/hooks/language";
import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";

const Settings = () => {
  const lang = useLanguage();
  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText>{lang.app.settings.title}</AppText>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Settings;
