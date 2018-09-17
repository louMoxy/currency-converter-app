import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import PropTypes from "prop-types";
import styles from "./styles";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("./images/gear.png")}
        resizeMode="contain"
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
);

Header.prototype = {
  onPress: PropTypes.func
};

export default Header;
