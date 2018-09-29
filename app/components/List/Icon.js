import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const Icon = ({ checkmark, visible, iconBackgroundColor }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackgroundColor) {
    iconStyles.push({ backgroundColor: iconBackgroundColor });
  }
  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          style={styles.iconImage}
          resizeMode="contain"
          source={require("./images/check.png")}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackgroundColor: PropTypes.string
};

export default Icon;
