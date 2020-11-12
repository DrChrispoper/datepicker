import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import Home from "../screens/Home";
import DateSelector from "../screens/DateSelector"

const MainStack = createStackNavigator(
  {
    Home: { screen: Home },
    DateSelector: { navigationOptions: { title: 'Booking Time', headerBackTitleVisible: false }, screen: DateSelector }
  },
  {
    initialRouteName: "Home",
    headerMode: "screen"
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
