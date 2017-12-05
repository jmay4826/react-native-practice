import React from "react";
import { StackNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import StoresListScreen from "./StoresListScreen";
import StoreScreen from "./StoreScreen";

const App = StackNavigator({
  Login: { screen: LoginScreen },
  StoresList: { screen: StoresListScreen },
  Store: { screen: StoreScreen }
});

export default App;
