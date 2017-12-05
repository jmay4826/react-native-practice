import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";

export default class StoresListScreen extends React.Component {
  constructor() {
    super();
    this.state = { text: "not changed" };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(store) {
    this.props.navigation.navigate("Store", { store });
  }
  render() {
    const stores = [
      {
        name: "Downtown Demo",
        code: "D100",
        key: "D100"
      },
      {
        name: "Uptown Demo",
        code: "U100",
        key: "U100"
      },
      {
        name: "Dallas Demo",
        code: "D200",
        key: "D200"
      }
    ];
    return (
      <View>
        <FlatList
          data={stores}
          renderItem={({ item }) => (
            <Text
              style={{ height: 50 }}
              onPress={() => this.handleSelect(item)}
            >
              {item.name} - {item.code}{" "}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
