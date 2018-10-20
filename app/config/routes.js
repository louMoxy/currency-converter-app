import { createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/OptionScreen";
import Themes from "../screens/Themes";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: { title: "Options" }
  },
  Themes: {
    screen: Themes,
    navigationOptions: { title: "Themes" }
  },
  headerMode: "screen"
});

export default createStackNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header: () => null
    }
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title")
    })
  }
});
