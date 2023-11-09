import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from "react-native-safe-area-context";

import useColors from "hooks/themes/useColors";
import { Colors } from "schemas/themes/Colors";

interface Props extends NativeSafeAreaViewProps {
  children?: React.ReactNode;
  safeArea: true | false;
}

const AppLayout: React.FC<Props> = (props) => {
  const { children, safeArea } = props;
  const colors = useColors();
  const styles = Styles(colors);

  if (safeArea) {
    return (
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={[styles.container, props.style]}
      >
        <StatusBar style="auto" />
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={[styles.container, props.style]}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
};

const Styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: colors.background.primary,
    },
  });

export default AppLayout;
