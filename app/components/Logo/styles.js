import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $largeImagePadding: imageWidth / 4,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $smallImagePadding: imageWidth / 8,
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeContainerSize",
    height: "$largeContainerSize"
  },
  container: {
    alignItems: "center"
  },
  logoImage: {
    width: "$largeImageSize",
    position: "absolute",
    top: "$largeImagePadding"
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: -0.5,
    color: "$white",
    marginTop: 15
  }
});
