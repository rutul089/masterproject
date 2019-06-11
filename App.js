/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Block, Text } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <Block>
        <Text h1> Hello </Text>
        <Text h1 regular> Regular </Text>
        <Text h1 bold > Bold </Text>
        <Text h1 semibold> Hello </Text>
        <Text h1 medium> Medium </Text>
        <Text h1 light> Light </Text>
      </Block>
    );
  }
}
