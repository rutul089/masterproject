import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Auth from "./Auth";
import Welcome from "./../screens/Welcome";
import Home from "./../screens/Home";
import Screens from "./Screens";

export default createAppContainer(
  createSwitchNavigator({
    Auth,
    Main: Screens
  })
);
