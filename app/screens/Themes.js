import React, { Component } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { ListItem } from "../components/List";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changePrimaryColor } from "../actions/theme";

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
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };
  handlePress = color => {
    const { navigation, dispatch } = this.props;
    dispatch(changePrimaryColor(color));
    navigation.goBack();
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

export default connect()(Themes);
