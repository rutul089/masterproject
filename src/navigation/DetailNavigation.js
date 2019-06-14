import React from "react";
import { createStackNavigator } from "react-navigation";

import { Platform } from "react-native";
import { theme } from "../constants";
import Home from "./../screens/Home";
import Offer from "./../screens/Offer";

export default createStackNavigator({ Offer, Home });
