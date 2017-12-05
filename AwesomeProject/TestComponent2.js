import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput
} from "react-native";

export default class TestComponent2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Test"
  };
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>TAB!</Text>
      </View>
    );
  }
}
