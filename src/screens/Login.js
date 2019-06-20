//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { theme } from "../constants";
import { Text, Block } from "../components";
import { Button, Input, Item, Label, Content, Form, Radio,Thumbnail } from "native-base";

const { height ,width} = Dimensions.get("window");

// create a component
class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Content>
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
          </Block>
        </Content>
      </React.Fragment>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.white
  },
  floatingLabelStyle: {
    marginTop: 2,
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1
  },
  labelStyle: {
    fontFamily: "Poppins-Light",
    fontSize: theme.sizes.base
  },
  inputStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: theme.sizes.base,
    color: theme.colors.black
  },
  buttonStyle: {
    flex: 0.5,
    backgroundColor: theme.colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.sizes.radius,
    marginLeft: theme.sizes.padding,
    marginRight: theme.sizes.padding,
    marginBottom: theme.sizes.padding
  }
});

//make this component available to the app
export default Login;
