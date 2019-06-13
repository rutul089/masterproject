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
import { Icon } from "native-base";

//-- Exporting navigation class
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Saved,
    Search,
    Setting
  },
  {
    // navigationOptions: ({ navigation }) => {
    //   const { routeName } = navigation.state.routes[navigation.state.index];
    //   let name;
    //   if (routeName == "Home") {
    //     name = " offers";
    //   } else {
    //     name = routeName;
    //   }
    //   return {
    //     headerTitle: name,
    //     headerStyle: {
    //       elevation: 1,
    //       shadowOpacity: 1
    //     },
    //     headerTitleStyle: {
    //       textAlign: "center",
    //       flex: 1,
    //       fontSize: theme.sizes.header,
    //       fontFamily: 'Rubik-Regular',
    //     }
    //   };
    // },
    tabBarOptions: {
      activeTintColor: theme.colors.black,
      inactiveTintColor: theme.colors.inactiveColor,
      showLabel: false
    },
    navigationOptions: {
      header: null
    }
  }
);

export default createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});
