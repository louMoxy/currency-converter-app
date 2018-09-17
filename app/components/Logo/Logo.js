import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.logoBackground}
      source={require("./images/background.png")}
      resizeMode="contain"
    >
      <Image
        source={require("./images/logo.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
