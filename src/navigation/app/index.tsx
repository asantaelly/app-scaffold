import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "src/screens/App/home";
import useLanguage from "src/hooks/language";
import Profile from "src/screens/App/profile";
import Settings from "src/screens/App/settings";
import { AppNavigationProps } from "src/schemas";

const AppTabs = createBottomTabNavigator<AppNavigationProps>();

const AppNavigator = () => {
  const lang = useLanguage();

  return (
    <AppTabs.Navigator initialRouteName="Home">
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
