/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import Logo from "./images/logo.svg";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    console.log(Logo);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cheery Tomato!</Text>
        <Logo width={160} height={148} />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "RobotoSlab-Regular"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontFamily: "RobotoMono-Regular"
  }
});
