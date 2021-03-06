import React from "react";
import Navigator from "./config/routes";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import store from "./config/store";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGrey: "#f0f0f0",
  $darkText: "#343434"
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
