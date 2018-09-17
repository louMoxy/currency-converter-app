import React from "react";
import Home from "./screens/Home";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGrey: "#f0f0f0"
});

export default () => <Home />;
