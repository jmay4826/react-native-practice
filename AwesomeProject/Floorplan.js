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
  Dimensions
} from "react-native";

export default class Floorplan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "not changed",
      touched: "no",
      markerX: 0,
      markerY: 0,
      showModal: false
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    // console.log(this);
    this.setState({
      markerX: e.nativeEvent.locationX,
      markerY: e.nativeEvent.locationY,
      showModal: true
    });
    this.props.showModal();
  }
  render() {
    const window = Dimensions.get("window");
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Image
            resizeMode="contain"
            source={require("./img/D100.png")}
            style={{
              width: window.width,
              height: 459
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            width: 20,
            borderRadius: 20,
            backgroundColor: "rgba(200, 20, 20, 0.9)",
            top: this.state.markerY,
            left: this.state.markerX,
            position: "absolute"
          }}
        >
          <Text>1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
