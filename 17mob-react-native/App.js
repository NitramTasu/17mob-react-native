import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"
import Seasons from "./components/Seasons/index";
import HomeScreen from "./screens/Home/index"
import SeasonScreen from "./screens/SeasonScreen/index"
import DriversScreen from "./screens/DriversScreen/index"
import ResultsScreen from "./screens/ResultsScreen/index"

const AppNavigator = createStackNavigator(

  {
    Home: {
      screen: HomeScreen,
    },
    SeasonScreen: {
      screen: SeasonScreen,
    },
    Drivers: {
      screen: DriversScreen,
    },
    Results: {
      screen: ResultsScreen,
    }
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator)