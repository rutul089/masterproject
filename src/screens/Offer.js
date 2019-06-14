//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Block, Text } from "./../components";
import { Icon, Content, Thumbnail } from "native-base";
import { theme } from "../constants";
import { Platform } from "react-native";

// create a component
class Offer extends Component {
  static navigationOptions = {
    headerRightContainerStyle: {
      alignItems: Platform.OS === "ios" ? "flex-end" : "center",
      marginRight: theme.sizes.padding
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderColor: theme.colors.borderColor
    },
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="star"
          type="SimpleLineIcons"
          style={{ color: "black", fontSize: theme.sizes.iconSize }}
        />
      </TouchableOpacity>
    )
  };
  render() {
    return (
      <Content>
        <Block white style={styles.container}>
          <Block flex={1} row>
            <Block flex={0.25} top>
              <Thumbnail
                source={require("../../assets/image/base/avatar_1.png")}
                style={{ height: 45, width: 45 }}
              />
            </Block>
            <Block flex={0.75} column>
              <Block>
                <Text h1>10-50% off</Text>
                <Text
                  caption
                  style={{
                    lineHeight: 20,
                    fontWeight: "400",
                    paddingVertical: 8
                  }}
                >
                  Flat discounts on every food purchase on above 50$. T&C Apply
                </Text>
              </Block>
              <Block
                flex={1}
                row
                style={{ justifyContent: "space-between", marginTop: 6 }}
              >
                <Block
                  row
                  card
                  style={{
                    backgroundColor: "#FFFAE5",
                    marginRight: 6,
                    padding: 4,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="star"
                    type="Entypo"
                    style={{
                      color: theme.colors.tertiary,
                      fontSize: theme.sizes.body,
                      marginRight: 2
                    }}
                  />
                  <Text small medium>
                    4.5
                  </Text>
                </Block>
                <Block
                  card
                  style={{
                    backgroundColor: "#E4F2FD",
                    marginRight: 6,
                    padding: 4,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text small medium color="#368CD5">
                    Food
                  </Text>
                </Block>
                <Block
                  card
                  style={{
                    backgroundColor: "#FAE7EC",
                    justifyContent: "center",
                    padding: 4,
                    alignItems: "center"
                  }}
                >
                  <Text small medium color="#B24960">
                    12 Days
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            flex={1}
            column
            style={{
              marginTop: theme.sizes.padding * 1.5
            }}
          >
            <ImageBackground
              style={styles.campingImage}
              imageStyle={styles.campingImage}
              source={require("../../assets/image/base/banner_1.jpg")}
            />
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
    paddingRight: theme.sizes.padding,
    paddingLeft: theme.sizes.padding,
    paddingTop: theme.sizes.padding
  },
  campingImage: {
    flex: 1,
    width: null,
    height: 150,
    borderRadius: 6,
    resizeMode: "cover"
  }
});

//make this component available to the app
export default Offer;
