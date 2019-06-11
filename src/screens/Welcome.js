//import liraries
import React, { Component } from "react";
import { View, StyleSheet ,TouchableOpacity} from "react-native";
import { Block, Text } from "../components";


// create a component
class Welcome extends Component {
  render() {
    return (
      <Block middle flex={1}>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
          <Text center h2>
            Welcome
          </Text>
        </TouchableOpacity>
      </Block>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Welcome;
