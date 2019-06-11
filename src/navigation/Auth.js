import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "./../screens/Login";
import SignUp from "./../screens/SignUp";
import Welcome from "./../screens/Welcome";

export default createStackNavigator(
  {
    Welcome,
    Login,
    SignUp
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
