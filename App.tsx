import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppRoot from "navigation/index";
import AppProvider from "providers/index";
import { fontsDefinition } from "themes/fonts/definition";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(fontsDefinition);

  const OnLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={OnLayoutRootView}>
      <SafeAreaProvider>
        <AppProvider>
          <AppRoot />
        </AppProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
