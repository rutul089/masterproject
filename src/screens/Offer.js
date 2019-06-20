//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
  Image
} from "react-native";
import { Block, Text } from "./../components";
import { Icon, Content, Button, Thumbnail } from "native-base";
import { theme } from "../constants";
import { Platform } from "react-native";
import { images } from "../constants/mocks";
const { width, height } = Dimensions.get("window");

// create a component
class Offer extends Component {
  state = {
    categories: []
  };
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

  componentDidMount = () => {
    const categories = this.props.navigation.getParam("category");
    this.setState({ categories: categories });
    console.log(categories);
  };

  renderImageSliderItem = item => {
    return (
      <Block
        flex={1}
        column
        style={{
          marginTop: theme.sizes.padding * 1.5
        }}
      >
        <ImageBackground
          style={styles.campingImage}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        />
      </Block>
    );
  };

  renderImageSlider = () => {
    const { offers } = this.props;
    return (
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={offers}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => this.renderImageSliderItem(item)}
      />
    );
  };

  renderOfferDetail = () => {
    return (
      <Block flex={1} column style={styles.offerBlock}>
        <Text h2 medium>
          Offer Details
        </Text>
        <Block flex={1} row style={styles.offerDetail}>
          <Block flex={1}>
            <Text caption h3 height={18}>
              Branch Location
            </Text>
          </Block>
          <Block row right center flex={1}>
            <Text h3>New York, NY</Text>
            <Image
              style={{ height: 14, width: 14, marginLeft: 8 }}
              source={require("../../assets/image/icons/ic_navigation.png")}
            />
          </Block>
        </Block>
        <Block flex={1} row style={styles.offerDetail}>
          <Block flex={1}>
            <Text caption h3 height={18}>
              Phone
            </Text>
          </Block>
          <Block row right center flex={1}>
            <Text h3>+1 532-512-5125</Text>
            <Image
              style={{ height: 14, width: 14, marginLeft: 8 }}
              source={require("../../assets/image/icons/ic_phone.png")}
            />
          </Block>
        </Block>
        <Block flex={1} row style={styles.offerDetail}>
          <Block flex={1}>
            <Text caption h3 height={18}>
              Website
            </Text>
          </Block>
          <Block row right center flex={1}>
            <Text h3>mcdonalds.com</Text>
            <Image
              style={{ height: 14, width: 14, marginLeft: 8 }}
              source={require("../../assets/image/icons/ic_web.png")}
            />
          </Block>
        </Block>
        <Block flex={1} row style={styles.offerDetail}>
          <Text caption h3 height={18}>
            Offer Validity
          </Text>

          <Text h3>Dec, 2019</Text>
        </Block>
      </Block>
    );
  };

  render() {
    const { offers } = this.props;
    const { categories } = this.state;
    return (
      <React.Fragment>
        <Content>
          <Block white style={styles.container}>
            <Block flex={1} row>
              <Block flex={0.25} top>
                <Thumbnail
                  source={categories.image}
                  style={{ height: 45, width: 45 }}
                />
              </Block>
              <Block flex={0.75} column>
                <Block>
                  <Text h1>{categories.offer}</Text>
                  <Text
                    caption
                    style={{
                      lineHeight: 20,
                      fontWeight: "400",
                      paddingVertical: 8
                    }}
                  >
                    {categories.note}
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
                      {categories.rating}
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
                      {categories.type}
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
                      {categories.timeLeft}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
            {this.renderImageSlider()}
            {this.renderOfferDetail()}
            <Button
              full
              style={[
                theme.fonts.buttonStyle,
                { marginVertical: theme.sizes.padding * 1.5 }
              ]}
            >
              <Text semibold white h3>
                Claim this Offer
              </Text>
            </Button>
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
    paddingRight: theme.sizes.padding,
    paddingLeft: theme.sizes.padding,
    paddingTop: theme.sizes.padding
  },
  campingImage: {
    flex: 0,
    width: width - theme.sizes.padding * 4,
    height: 150,
    resizeMode: "cover",
    marginRight: 10,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius
  },
  offerDetail: {
    paddingTop: theme.sizes.padding / 2,
    justifyContent: "space-between",
    alignItems: "center"
  },
  offerBlock: {
    marginTop: theme.sizes.padding * 1.5,
    borderRadius: theme.sizes.radius,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding / 2
  }
});

Offer.defaultProps = {
  offers: images
};
//make this component available to the app
export default Offer;
