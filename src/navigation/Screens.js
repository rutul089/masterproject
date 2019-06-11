import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
//-- Defining screen name
import Home from "../screens/Home";
import Saved from "./../screens/Saved";
import Setting from "./../screens/Settings";
import Search from "./../screens/Search";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../constants";

//-- Exporting navigation class
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Saved,
    Setting,
    Search
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    iconStyle: {
      width: 30,
      height: 30
    },
    tabBarOptions: {
      showIcon: true,
      showLabel: true
    },
    activeTintColor: "black",
    inactiveTintColor: theme.colors.inactiveColor
  }
);

export default createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});
