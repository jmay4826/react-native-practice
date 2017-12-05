import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };
  constructor(props) {
    super(props);
    this.state = { username: "Username", password: "Password" };

    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    navigate("StoresList");
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F2F2F2",
          justifyContent: "center"
        }}
      >
        <View style={styles.legendAndFieldView}>
          <Text style={{ flex: 1 }}>Username</Text>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Username"
            onChangeText={text => this.setState({ username: text })}
          />
        </View>
        <View style={styles.legendAndFieldView}>
          <Text style={{ flex: 1 }}>Password</Text>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </View>
        <View>
          <Button onPress={this.handleButton} title="Login" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  legendAndFieldView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A2F2F2",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },
  input: {
    flex: 2,
    height: 50
  }
});
