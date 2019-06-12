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
        column
        style={{
          flex: 1,
          alignItems: "center",
          paddingLeft: theme.sizes.base,
          paddingRight: theme.sizes.base
        }}
      >
        <Block flex={1} bottom>
          <Image
            source={require("../../assets/image/base/ic_logo.png")}
            resizeMode="contain"
            style={{
              width: width / 2,
              height: "30%"
            }}
          />
        </Block>
        <Block flex={0.7} column>
          <Text center bold h2 style={{ marginTop: theme.sizes.padding }}>
            Welcome Aboard!
          </Text>
          <Text
            note
            center
            semibold
            flex={1}
            size={theme.sizes.font}
            style={styles.noteStyle}
          >
            Signup to get started with the app.Login if you already have an
            account
          </Text>
        </Block>
        <Block
          column
          flex={1}
          style={{ padding: 10, justifyContent: "space-around" }}
        >
          <Block
            row
            flex={1}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              width: "100%"
            }}
          >
            <Button
              style={{
                flex: 0.5,
                width: "100%",
                marginRight: theme.sizes.radius,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: theme.sizes.radius,
                borderColor: theme.colors.borderColor
              }}
            >
              <Image
                source={require("../../assets/image/icons/ic_facebook.png")}
                style={{
                  height: theme.sizes.iconSize,
                  width: theme.sizes.iconSize
                }}
              />
            </Button>
            <Button
              style={{
                flex: 0.5,
                width: "100%",
                marginLeft: theme.sizes.radius,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: theme.sizes.radius,
                borderColor: theme.colors.borderColor
              }}
            >
              <Image
                source={require("../../assets/image/icons/ic_google.png")}
                style={{
                  height: theme.sizes.iconSize,
                  width: theme.sizes.iconSize
                }}
              />
            </Button>
          </Block>

          <Button
            onPress={() => this.props.navigation.navigate("SignUp")}
            color={theme.colors.blue}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: theme.sizes.radius
            }}
          >
            <Text center bold white title>
              Signup with E-mail
            </Text>
          </Button>
        </Block>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text center bold black title>
            Login to my account
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
  },
  noteStyle: {
    marginTop: 20,
    textAlign: "center",
    lineHeight: 22
  }
});

//make this component available to the app
export default Welcome;
