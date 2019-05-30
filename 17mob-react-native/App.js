import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"
import Seasons from "./components/Seasons/index";
import HomeScreen from "./screens/Home/index"
import SeasonScreen from "./screens/SeasonScreen/index"

const AppNavigator = createStackNavigator(

  {
    Home: {
      screen: HomeScreen,
    },
    SeasonScreen: {
      screen: SeasonScreen,
    }
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator)