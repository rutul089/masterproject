//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";

import { Block, Text } from "../components";
import { theme } from "../constants";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");

// create a component
class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  //-- Facebook login
  handleClickFacebook = () => {
    alert("facebook login coming soon");
  };
  //-- Google Login
  handleClickGoogle = () => {
    alert("google login coming soon");
  };
  //-- Sign up
  handleClickSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };
  //-- Login with email
  handleClickLogin = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <Block
        column
        flex={1}
        middle
        style={{
          alignItems: "center",
          backgroundColor: theme.colors.white,
          paddingLeft: theme.sizes.base,
          paddingRight: theme.sizes.base
        }}
      >
        <Block flex={0.3} middle>
          <Image
            source={require("../../assets/image/base/ic_logo.png")}
            resizeMode="contain"
            style={{
              width: width / 2,
              height: "30%"
            }}
          />
        </Block>
        <Block flex={0.1} middle column>
          <Text center bold h2 style={{ marginTop: theme.sizes.padding }}>
            Welcome Aboard!
          </Text>
        </Block>
        <Block flex={0.1} middle>
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
        <Block flex={0.3} column style={{ marginTop: theme.sizes.padding }}>
          <Block
            row
            flex={1}
            style={{
              justifyContent: "space-around",
              width: width,
              paddingLeft: theme.sizes.base,
              paddingRight: theme.sizes.base
            }}
          >
            <Button
              bordered
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
              onPress={() => this.handleClickFacebook()}
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
              bordered
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
              onPress={() => this.handleClickGoogle()}
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
          <Block
            flex={1}
            column
            bottom
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Button
              block
              style={{
                flex: 0.5,
                backgroundColor: theme.colors.blue,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: theme.sizes.radius,
                marginLeft: theme.sizes.padding,
                marginRight: theme.sizes.padding
              }}
              onPress={() => this.handleClickSignUp()}
            >
              <Text center regular white style={{ fontWeight: "bold" }}>
                Signup with E-mail
              </Text>
            </Button>
          </Block>
          <Button
            transparent
            style={{ alignSelf: "center" }}
            onPress={() => this.handleClickLogin()}
          >
            <Text bold>Login to my Account</Text>
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
    lineHeight: 22
  }
});

//make this component available to the app
export default Welcome;
