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
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          elevation: 1,
          shadowOpacity: 1
        }
      };
    },
    tabBarOptions: {
      activeTintColor: theme.colors.black,
      inactiveTintColor: theme.colors.inactiveColor,
      showLabel: false
    }
  }

  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;

  //       let IconComponent = Icon;
  //       let iconName;
  //       let type;
  //       if (routeName === "Home") {
  //         iconName = `home`;
  //         type = "FontAwesome";
  //       } else if (routeName === "Setting") {
  //         iconName = `setting`;
  //         type = "AntDesign";
  //       } else if (routeName == "Saved") {
  //         iconName = `staro`;
  //         type = "AntDesign";
  //       } else if (routeName == "Search") {
  //         type = "Ionicons";
  //         iconName = `ios-search`;
  //       }

  //       // You can return any component that you like here!
  //       return (
  //         <IconComponent
  //           name={iconName}
  //           style={{ color: tintColor, fontSize: theme.sizes.iconSize }}
  //           type={type}
  //         />
  //       );
  //     }
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: "red",
  //     inactiveTintColor: "gray",
  //     showLabel: false
  //   }
  // }
);

export default createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});
