import React, { Component } from "react";
import { View, FlatList, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { ListItem } from "../components/List";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  render() {
    const { selected } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === selected}
              onPress={() => this.handlePress(item)}
            />
          )}
        />
      </View>
    );
  }
}

export default connect()(CurrencyList);
