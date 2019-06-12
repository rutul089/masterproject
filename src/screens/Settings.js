//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants";
import { Icon } from "native-base";

// create a component
class Setting extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="setting"
        type="AntDesign"
        style={{ color: tintColor, fontSize: theme.sizes.iconSize }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white
  }
});

//make this component available to the app
export default Setting;
