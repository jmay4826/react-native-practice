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

export default class TestComponent1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Testy"
  };
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ borderWidth: 1, flex: 1 }}>
        <Text>TABY!</Text>
      </View>
    );
  }
}
