import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "src/screens/App/home/Index";
import Profile from "src/screens/App/profile/Index";

const AppTabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <AppTabs.Navigator initialRouteName="Home">
      <AppTabs.Screen name="Home" component={Home} />
      <AppTabs.Screen name="Profile" component={Profile} />
    </AppTabs.Navigator>
  );
};

export default AppNavigator;
