//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import { theme } from "../constants";
import { Icon, Thumbnail, Content } from "native-base";
import { Block, Text } from "./../components";
const { width, height } = Dimensions.get("screen");
// create a component
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        type="FontAwesome"
        style={{ color: tintColor, fontSize: theme.sizes.iconSize }}
      />
    )
  };

  renderRow() {
    return (
      <Block row flex={1} color="white" style={styles.request}>
        <Block
          flex={0.25}
          middle
          style={{
            height: null,
            alignItems: "center"
          }}
        >
          <Thumbnail source={require("../../assets/image/base/avatar_1.png")} />
        </Block>
        <Block
          flex={0.75}
          style={{
            marginLeft: theme.sizes.padding
          }}
        >
          <Text semibold black size={theme.sizes.title}>
            10-40% off
          </Text>
          <Text note style={{ paddingVertical: 6 }}>
            For first time user
          </Text>
          <Block flex={1} row style={{ justifyContent: "space-between" }}>
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
              <Text body medium>
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
              <Text body medium color="#368CD5">
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
              <Text body medium color="#B24960">
                12 Days
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
  render() {
    return (
      <Block style={styles.container} flex={1}>
        <Content>
          <Block
            row
            flex={0.1}
            style={{
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text size={theme.sizes.header} bold>
              Offer Galore
            </Text>
            <Thumbnail
              small
              source={require("../../assets/image/base/avatar_1.png")}
            />
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
          <View
            style={{
              marginVertical: theme.sizes.padding,
              borderBottomColor: theme.colors.borderColor,
              borderBottomWidth: 1
            }}
          />
          <Block
            row
            flex={1}
            style={{ alignItems: "space-between", alignItems: "center" }}
          >
            <Block>
              <Text note size={theme.sizes.font}>
                Recommended for you
              </Text>
            </Block>
            <TouchableOpacity>
              <Block
                row
                flex={1}
                style={{ justifyContent: "flex-end", alignContent: "center" }}
              >
                <Text
                  note
                  size={theme.sizes.font}
                  style={{ alignSelf: "center", paddingRight: 6 }}
                >
                  Filters
                </Text>
                <Icon
                  name="filter-variant"
                  type="MaterialCommunityIcons"
                  style={{ color: "black", fontSize: theme.sizes.iconSize }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
        </Content>
      </Block>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
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
  },
  request: {
    marginTop: theme.sizes.padding,
    padding: theme.sizes.base,
    marginBottom: 6,
    borderWidth: 1,
    borderRadius: theme.sizes.border,
    borderColor: theme.colors.borderColor
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden"
  }
});

//make this component available to the app
export default Home;
