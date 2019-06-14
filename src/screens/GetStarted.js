//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import { Block, Text } from "../components";
import { theme } from "../constants";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");

// create a component
class GetStarted extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Block style={{ backgroundColor: theme.colors.white }} flex={1}>
        <Block flex={0.6} style={{ top: 0, bottom: 0, left: 0, right: 0 }}>
          <Image
            source={require("../../assets/image/icons/welcome.jpg")}
            resizeMode="cover"
            style={{
              bottom: 0,
              flex: 1,
              width: width
            }}
          />
        </Block>
        <Block
          center
          middle
          flex={0.3}
          style={{ marginTop: theme.sizes.padding }}
        >
          <Text h1> Cheers to Discounts!</Text>
          <Text note style={styles.noteStyle}>
            {" "}
            Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
            Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
          </Text>
        </Block>
        <Block center middle flex={0.1} style={{ margin: theme.sizes.padding }}>
          <Button
            full
            style={theme.fonts.buttonStyle}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            <Text semiBold white>
              Get Started
            </Text>
          </Button>
        </Block>
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
  },
  noteStyle: {
    marginTop: 20,
    textAlign: "center",
    lineHeight: 20
  }
});

//make this component available to the app

export default GetStarted;
