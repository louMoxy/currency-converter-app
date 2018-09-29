import React, { Component } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem } from "../components/List";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class OptionScreen extends Component {
  handlePress = () => {
    console.log("item press");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <ScrollView>
          <ListItem
            text="Themes"
            onPress={this.handlePress}
            customIcon={
              <Ionicons
                name="ios-arrow-forward"
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <ListItem
            text="Fixer.io"
            onPress={this.handlePress}
            customIcon={
              <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default OptionScreen;
