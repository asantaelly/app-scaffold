import React from "react";
import { StyleSheet } from "react-native";

import useLanguage from "src/hooks/language";
import AppLayout from "src/layouts/App/AppLayout";
import AppText from "src/components/lib/text/AppText";
import AppButton from "src/components/lib/button/AppButton";

type Props = {}

const Home = () => {
  const lang = useLanguage();

  return (
    <AppLayout safeArea={true} style={styles.container}>
      <AppText>{lang.app.home.title}</AppText>
      <AppButton title="button" style={[{ backgroundColor: "#000" }]}>
        {lang.app.home["button-title"]}
      </AppButton>
    </AppLayout>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

