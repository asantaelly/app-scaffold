import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppContext from "src/contexts";
import AppEntry from "src";
import { fontsDefinition } from "src/themes/fonts/definition";

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
        <AppContext>
          <AppEntry />
        </AppContext>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
