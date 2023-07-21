const { StyleSheet } = require("react-native");
import Constants from "expo-constants";

exports.styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
