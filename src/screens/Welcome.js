//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";

import { Block, Text, Button } from "../components";
import { theme } from "../constants";
const { width, height } = Dimensions.get("window");

// create a component
class Welcome extends Component {
  render() {
    return (
      <Block
        middle
        flex={1}
        column
        style={{
          alignItems: "center",
          paddingLeft: theme.sizes.base,
          paddingRight: theme.sizes.base
        }}
      >
        <Block
          middle
          flex={0.7}
          column
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            paddingLeft: theme.sizes.base,
            paddingRight: theme.sizes.base
          }}
        >
          <Image
            source={require("../../assets/image/base/illustration_1.png")}
            resizeMode="contain"
            style={{
              flex: 1,
              width: width / 2,
              height: height,
              overflow: "visible",
              justifyContent: "center",
              alignItems: "center"
            }}
          />

          <Text center h2 style={{ marginTop: theme.sizes.padding }}>
            Cheers to Discounts!
          </Text>
          <Text
            note
            center
            flex={1}
            size={theme.sizes.title}
            style={styles.noteStyle}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sollicitudin orci in urna placerat porttitor. Duis dignissim libero
            sed tellus euismod, id vehicula urna faucibus.
          </Text>
        </Block>
        <Block style={{ justifyContent: "flex-end", width: "100%" }} flex={0.2}>
          <Button
            flex={1}
            color={theme.colors.blue}
            style={{ width: "100%", alignSelf: "flex-end" }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text center bold white title>
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
    lineHeight: 25
  }
});

//make this component available to the app
export default Welcome;
