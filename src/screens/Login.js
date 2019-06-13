//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { theme } from "../constants";
import { Text, Block } from "../components";
import { Button, Input, Item, Label, Content, Form, Radio } from "native-base";

const { height } = Dimensions.get("window");

// create a component
class Login extends Component {
  render() {
    return (
      <Content>
        <Block center middle>
          <Block middle>
            <Image
              resizeMode="contain"
              source={require("../../assets/image/base/ic_logo.png")}
              style={{
                height: 70,
                width: 102,
                marginBottom: theme.sizes.padding
              }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h2 style={{ marginBottom: 6 }}>
              Login
            </Text>
            <Text
              note
              size={theme.sizes.base}
              style={{
                marginLeft: theme.sizes.padding,
                marginRight: theme.sizes.padding,
                marginTop: theme.sizes.radius,
                marginBottom: theme.sizes.radius
              }}
            >
              Welcome back , login to continue
            </Text>

            <Block
              center
              style={{
                marginStart: theme.sizes.padding,
                marginEnd: theme.sizes.padding,
                marginTop: 5
              }}
            >
              <Item
                floatingLabel
                style={[
                  styles.floatingLabelStyle,
                  { marginBottom: theme.sizes.padding }
                ]}
              >
                <Label style={styles.labelStyle}>Username</Label>
                <Input style={styles.inputStyle} />
              </Item>
              <Item floatingLabel style={styles.floatingLabelStyle}>
                <Label style={styles.labelStyle}>Password</Label>
                <Input secureTextEntry={true} style={styles.inputStyle} />
              </Item>
              <Block
                flex={1}
                row
                style={{
                  justifyContent: "space-around",
                  marginTop: theme.sizes.padding,
                  marginBottom: theme.sizes.padding
                }}
              >
                <Block
                  row
                  flex={1}
                  style={{
                    alignItems: "center"
                  }}
                >
                  <Radio
                    color={"#B1BAC7"}
                    selectedColor={"#BBBEC4"}
                    selected={true}
                  />
                  <Text
                    regular
                    note
                    size={theme.sizes.base}
                    style={{ marginLeft: theme.sizes.base }}
                  >
                    Remember me
                  </Text>
                </Block>
                <Block
                  style={{
                    flex: 1,
                    alignItems: "flex-end"
                  }}
                >
                  <TouchableOpacity>
                    <Text
                      style={[
                        { flex: 1, alignItems: "flex-end" },
                        styles.inputStyle
                      ]}
                    >
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </Block>
            <Button
              block
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Text center regular white style={{ fontWeight: "bold" }}>
                Login to my Account
              </Text>
            </Button>
            <Button
              transparent
              style={{ alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text bold>Signup for New Account</Text>
            </Button>
          </Block>
        </Block>
      </Content>
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
    fontFamily: "Rubik-Light",
    fontSize: theme.sizes.base
  },
  inputStyle: {
    fontFamily: "Rubik-Regular",
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
