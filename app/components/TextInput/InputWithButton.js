import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import PropTypes from "prop-types";
import color from "color";

import styles from "./styles";

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, textColor } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.prototype = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string
};

export default InputWithButton;
