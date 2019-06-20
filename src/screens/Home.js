//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView,
  Dimensions
} from "react-native";
import { theme, mocks } from "../constants";
import { Icon, Thumbnail, Content } from "native-base";
import { Block, Text } from "./../components";

const { width, height } = Dimensions.get("screen");
// create a component
class Home extends Component {
  state = {
    active: "Products",
    categories: []
  };
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories, active: "All Offer" });
  }

  handleTab = tab => {
    const { categories } = this.props;
    console.log(tab);
    const filtered = categories.filter(category => category.tags.includes(tab));

    this.setState({ active: tab, categories: filtered });
  };

  renderFilter() {
    return (
      <Block
        row
        flex={1}
        style={{
          alignItems: "space-between",
          alignItems: "center",
          paddingRight: theme.sizes.padding,
          paddingLeft: theme.sizes.padding
        }}
      >
        <Block>
          <Text note size={theme.sizes.font}>
            Recommended for you
          </Text>
        </Block>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Offer")}
        >
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
    );
  }
  renderRow() {
    const { categories } = this.state;
    return (
      <Block>
        {categories.map(category => (
          <TouchableOpacity
            key={category.name}
            onPress={() =>
              this.props.navigation.navigate("Offer", { category })
            }
          >
            <Block row flex={1} color="white" style={styles.request}>
              <Block
                flex={0.25}
                middle
                style={{
                  height: null,
                  alignItems: "center"
                }}
              >
                <Thumbnail
                  source={category.image}
                  style={{ height: 45, width: 45 }}
                />
              </Block>
              <Block
                flex={0.75}
                style={{
                  marginLeft: theme.sizes.padding
                }}
              >
                <Text medium black size={theme.sizes.body}>
                  {category.offer}
                </Text>
                <Text
                  light
                  size={theme.sizes.caption}
                  style={{ marginTop: 6, color: "#9399a3" }}
                >
                  {category.note}
                </Text>
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
                      {category.rating}
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
                      {category.type}
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
                      {category.timeLeft}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
        ))}
      </Block>
    );
  }

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={13} regular note={!isActive} black={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const tabs = ["All Offer", "Food", "Clothing", "Electronic", "Home"];
    const { categories } = this.state;
    return (
      <Content>
        <Block style={styles.container} flex={1}>
          <Block row flex={0.1} style={styles.header}>
            <Text h1>Offers Galore</Text>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("Setting")}
            >
              <Thumbnail
                small
                source={require("../../assets/image/base/avatar_1.png")}
              />
            </TouchableNativeFeedback>
          </Block>
          <Block
            flex={1}
            column
            style={{
              marginTop: theme.sizes.padding * 1.5,
              paddingRight: theme.sizes.padding,
              paddingLeft: theme.sizes.padding
            }}
          >
            <ImageBackground
              style={styles.campingImage}
              imageStyle={styles.campingImage}
              source={require("../../assets/image/base/banner_1.jpg")}
            />
          </Block>

          <Block flex={false} row style={styles.tabs}>
            {tabs.map(tab => this.renderTab(tab))}
          </Block>
          {this.renderFilter()}
          <Block
            style={{
              paddingRight: theme.sizes.padding,
              paddingLeft: theme.sizes.padding
            }}
          >
            {this.renderRow()}
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
    backgroundColor: theme.colors.white,
    // paddingRight: theme.sizes.padding,
    // paddingLeft: theme.sizes.padding,
    paddingTop: theme.sizes.padding
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: theme.sizes.padding,
    paddingLeft: theme.sizes.padding
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
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 6,
    borderWidth: 1,
    borderRadius: theme.sizes.radius,
    borderColor: theme.colors.borderColor
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden"
  },
  tabs: {
    borderBottomColor: theme.colors.borderColor,
    borderBottomWidth: 1,
    marginVertical: theme.sizes.base * 2,
    marginLeft: theme.sizes.padding
  },
  active: {
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 3
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  }
});
Home.defaultProps = {
  categories: mocks.categories
};

//make this component available to the app
export default Home;
