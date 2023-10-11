import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";
import AppButton from "src/components/lib/button/AppButton";

const Index = () => {
  return (
    <AppLayout safeArea={true} style={styles.container}>
      <StatusBar style="auto" />
      <AppText>Home</AppText>
      <AppButton title="button">Button</AppButton>
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
