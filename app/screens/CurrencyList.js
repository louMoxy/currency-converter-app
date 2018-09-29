import React, { Component } from "react";
import { View, FlatList, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { ListItem } from "../components/List";

class CurrencyList extends Component {
  handlePress = () => {
    console.log("row press");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === "CAD"}
              onPress={this.handlePress}
            />
          )}
        />
      </View>
    );
  }
}

export default CurrencyList;
