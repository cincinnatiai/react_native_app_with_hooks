import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start"
  },
  frame: {
    flexGrow: 1,
    height: Dimensions.get("window").height,
    alignSelf: "stretch",
    alignItems: "stretch",
    margin: 16
  },
  item: {
    width: Dimensions.get("window").width,
    marginVertical: 8
  },
  textInput: {
    flexGrow: 1,
    maxHeight: 48,
    borderStyle: "solid",
    borderColor: "gray",
    padding: 12,
    borderWidth: 2
  },
  h1: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 24
  },
  h2: {
    fontWeight: "normal",
    fontSize: 16
  },
  h3: {
    marginVertical: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16
  },
  debug: {
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
    textTransform: "uppercase",
    fontSize: 12
  },
  indicator: {
    flexGrow: 1
  }
});

export default styles;
