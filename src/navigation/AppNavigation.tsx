import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import Home from "../screens/Home";

const MainStack = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: MainStack,
    },
    {
      initialRouteName: "Home"
    }
  )
);
