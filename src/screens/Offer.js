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
const { width, height } = Dimensions.get("window");
const mocks = [
  {
    id: 1,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: false,
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description: "Santorini - Description",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
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
      <Block
        flex={1}
        column
        style={{
          marginTop: theme.sizes.padding * 1.5,
          borderRadius: theme.sizes.radius,
          borderColor: theme.colors.borderColor,
          borderWidth: 1,
          paddingVertical: theme.sizes.padding,
          paddingHorizontal: theme.sizes.padding / 2
        }}
      >
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
    return (
      <React.Fragment>
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
                    Flat discounts on every food purchase on above 50$. T&C
                    Apply
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
  }
});

Offer.defaultProps = {
  offers: mocks
};
//make this component available to the app
export default Offer;
