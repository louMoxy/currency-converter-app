import React, { Component } from "react";
import { View, Text, Keyboard, Animated, Platform } from "react-native";

import styles from "./styles";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
    this.imagePadding = new Animated.Value(styles.$largeImagePadding);
  }

  componentDidMount() {
    let showListener = "keyboardWillShow";
    let hideListener = "keyboardWillHide";
    // Android doesnt have an event for willShow or willHide
    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardShowHide = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardShowHide.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize
      }),
      Animated.timing(this.imagePadding, {
        toValue: styles.$smallImagePadding
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize
      }),
      Animated.timing(this.imagePadding, {
        toValue: styles.$largeImagePadding
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize
      })
    ]).start();
  };

  render() {
    const imageStyle = [
      styles.logoImage,
      {
        width: this.imageWidth,
        height: this.imageWidth,
        top: this.imagePadding
      }
    ];
    const containerImageStyle = [
      styles.logoBackground,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];
    return (
      <View style={styles.container}>
        <Animated.Image
          style={containerImageStyle}
          source={require("./images/background.png")}
          resizeMode="contain"
        />
        <Animated.Image
          source={require("./images/logo.png")}
          style={imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
