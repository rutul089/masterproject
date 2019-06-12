//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants";
import { Icon } from "native-base";
// create a component
class Home extends Component {
  // static defaultNavigationOptions = {
  //   headerTitle: "Settings Activity",
  //   headerStyle: {
  //     backgroundColor: "#28F1A6",
  //     elevation: 0,
  //     shadowOpacity: 0
  //   },
  //   headerTintColor: "#333333"
  // };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        type="FontAwesome"
        style={{ color: tintColor, fontSize: theme.sizes.iconSize }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
export default Home;
