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

export default class AddIssueModal extends React.Component {
  constructor() {
    super();
    this.state = { issue: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.submitIssue(this.state.issue);
    this.props.hideModal();
  }
  render() {
    return (
      <Modal visible={this.props.modalVisible}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <TextInput
            onChangeText={text => this.setState({ issue: text })}
            placeholder="Enter Issue"
            style={{ borderWidth: 1 }}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button onPress={this.handleSubmit} title="Submit" />
            <Button onPress={this.props.hideModal} title="Cancel" />
          </View>
        </View>
      </Modal>
    );
  }
}
