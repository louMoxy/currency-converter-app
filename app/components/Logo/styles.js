import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: imageWidth,
    height: imageWidth
  },
  container: {
    alignItems: "center"
  },
  logoImage: {
    width: imageWidth / 2
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: -0.5,
    color: "$white",
    marginTop: 15
  }
});
