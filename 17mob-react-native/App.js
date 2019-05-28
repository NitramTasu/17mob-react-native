import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"
import Seasons from "./components/Seasons/index";
import HomeScreen from "./screens/Home/index"

const AppNavigator = createStackNavigator(

  {
    Home: {
      screen: HomeScreen,
    }
  }, {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator)