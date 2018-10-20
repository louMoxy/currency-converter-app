import React, { Component } from "react";
import { View, ScrollView, StatusBar, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem } from "../components/List";
import PropTypes from "prop-types";
import { connectAlert } from "../components/Alert";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class OptionScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };
  themesPressed = () => {
    this.props.navigation.navigate("Themes");
  };
  fixerPressed = () => {
    Linking.openURL("http://fixer.io").catch(() =>
      this.props.alertWithType(
        "error",
        "Sorry",
        "Fixer.io can't be opened right now"
      )
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <ScrollView>
          <ListItem
            text="Themes"
            onPress={this.themesPressed}
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
            onPress={this.fixerPressed}
            customIcon={
              <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default connectAlert(OptionScreen);
