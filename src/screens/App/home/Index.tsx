import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";
import AppButton from "src/components/lib/button/AppButton";
import useLanguage from "src/hooks/language";

const Index = () => {
  const lang = useLanguage();

  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText>{lang.app.home.title}</AppText>
      <AppButton title="button">{lang.app.home["button-title"]}</AppButton>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
