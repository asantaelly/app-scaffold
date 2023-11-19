import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "screens/app/home";
import useLanguage from "hooks/language";
import Profile from "screens/app/profile";
import Settings from "screens/app/settings";
import useColors from "hooks/themes/useColors";
import { AppNavigationProps } from "types/index";

const AppTabs = createBottomTabNavigator<AppNavigationProps>();

const AppNavigator = () => {
  const lang = useLanguage();
  const colors = useColors();

  return (
    <AppTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTitleStyle: {
          color: colors.text.secondary,
        },
        tabBarStyle: {
          backgroundColor: colors.background.primary,
        },
      }}
    >
      <AppTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: lang.navigation.home.title,
        }}
      />
      <AppTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          title: lang.navigation.settings.title,
        }}
      />
      <AppTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: lang.navigation.profile.title,
        }}
      />
    </AppTabs.Navigator>
  );
};

export default AppNavigator;
