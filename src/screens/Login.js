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
import {
  Button,
  Input,
  Item,
  Label,
  Content,
  Form,
  Radio,
  Thumbnail
} from "native-base";

const { height, width } = Dimensions.get("window");

// create a component
class Login extends Component {
  render() {
    return (
      <Block middle center>
        <Button
          full
          style={[
            theme.fonts.buttonStyle,
            { marginHorizontal: theme.sizes.padding }
          ]}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text semibold white size={13}>
            Login
          </Text>
        </Button>
      </Block>
    );
  }
}

export default Login;
