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
import { TabNavigator } from "react-navigation";

import Floorplan from "./Floorplan";
import AddIssueModal from "./AddIssueModal";
import TestComponent1 from "./TestComponent1";
import TestComponent2 from "./TestComponent2";

export default class StoreScreen extends React.Component {
  static navigationOptions = { title: "D100" };
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submitIssue = this.submitIssue.bind(this);
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  submitIssue(issue) {
    this.setState({ issue });
  }

  render() {
    const window = Dimensions.get("window");

    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView style={{ maxHeight: window.height - 400 }}>
          <Floorplan
            handlePress={this.handlePress}
            showModal={this.showModal}
          />
          <AddIssueModal
            modalVisible={this.state.modalVisible}
            hideModal={this.hideModal}
            submitIssue={this.submitIssue}
          />
        </ScrollView>
        <Tabs />
      </View>
    );
  }
}
const Tabs = TabNavigator({
  Current: { screen: TestComponent1 },
  Archived: { screen: TestComponent2 }
});
