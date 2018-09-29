import React, { Component } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { ListItem } from "../components/List";
import EStyleSheet from "react-native-extended-stylesheet";

const THEMES = [
  { name: "Blue", color: "$blue" },
  { name: "Orange", color: "$orange" },
  { name: "Green", color: "$green" },
  { name: "Purple", color: "$purple" }
];

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $orange: "$primaryOrange",
  $green: "$primaryGreen",
  $purple: "$primaryPurple"
});

class Themes extends Component {
  handlePress = color => {
    console.log("item press", color);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <ScrollView>
          {THEMES.map(theme => (
            <ListItem
              text={theme.name}
              onPress={() => this.handlePress(styles[theme.color])}
              key={theme.name}
              selected
              checkmark={false}
              iconBackgroundColor={styles[theme.color]}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Themes;
