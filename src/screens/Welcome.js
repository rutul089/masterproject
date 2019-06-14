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
import { Button, Thumbnail } from "native-base";
import { ImageBackground } from "react-native";
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
        style={{
          alignItems: "center",
          backgroundColor: theme.colors.white
        }}
      >
        <Block
          flex={0.4}
          style={{
            paddingVertical: theme.sizes.padding * 1.5
          }}
        >
          <ImageBackground
            source={require("../../assets/image/icons/bg.jpg")}
            resizeMode="stretch"
            style={{
              flex: 1,
              height: null,
              width: width,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Thumbnail
              style={{ resizeMode: "repeat" }}
              large
              square
              source={require("../../assets/ic_logo.jpg")}
            />
          </ImageBackground>
        </Block>
        <Block flex={0.6}>
          <Block flex={0.4} center middle>
            <Text h1>Welcome Aboard!</Text>
            <Text note style={styles.noteStyle}>
              Signup to get started with the app. Login if you already have an
              account.
            </Text>
          </Block>
          <Block
            flex={0.6}
            style={{
              marginHorizontal: theme.sizes.padding,
              flexDirection: "column"
            }}
          >
            <Block
              flex={1}
              row
              bottom
              style={{
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={[{ marginRight: 12 }, styles.buttonStyle]}
                onPress={() => this.handleClickFacebook()}
              >
                <Image
                  source={require("../../assets/image/icons/ic_facebook.png")}
                  style={{
                    height: theme.sizes.iconSize,
                    width: theme.sizes.iconSize
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.handleClickGoogle()}
                style={[{ marginLeft: 12 }, styles.buttonStyle]}
              >
                <Image
                  source={require("../../assets/image/icons/ic_google.png")}
                  style={{
                    height: theme.sizes.iconSize,
                    width: theme.sizes.iconSize
                  }}
                />
              </TouchableOpacity>
            </Block>
            <Block center middle>
              <Button
                full
                style={theme.fonts.buttonStyle}
                onPress={() => this.props.navigation.navigate("Welcome")}
              >
                <Text semibold white size={13}>
                  Signup with E-mail
                </Text>
              </Button>
            </Block>
            <Block>
              <Button
                transparent
                style={{ alignSelf: "center" }}
                onPress={() => this.handleClickLogin()}
              >
                <Text medium size={theme.sizes.h3}>Login to my Account</Text>
              </Button>
            </Block>
          </Block>
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
    paddingHorizontal: theme.sizes.padding,
    fontFamily: theme.fontFamily.regular,
    fontWeight: "400",
    lineHeight: 20
  },
  buttonStyle: {
    flex: 0.5,
    width: "100%",
    height: theme.sizes.buttonHeight,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.sizes.radius,
    borderColor: theme.colors.borderColor
  }
});

//make this component available to the app
export default Welcome;
