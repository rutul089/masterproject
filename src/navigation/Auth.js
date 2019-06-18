import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "./../screens/Login";
import SignUp from "./../screens/SignUp";
import Welcome from "./../screens/Welcome";
import GetStarted from "./../screens/GetStarted";
import { Platform } from "react-native";
import { theme } from "../constants";

export default createStackNavigator(
  { GetStarted, Welcome, Login, SignUp },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
);
