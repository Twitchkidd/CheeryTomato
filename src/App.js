/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import Title from "./elements/Title";
import Logo from "./elements/Logo";
import Box from "./elements/Box";
import Button from "./elements/Button";
import Footer from "./elements/Footer";

const ButtonBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default class App extends Component {
  state = {
    rockin: true
  };
  render() {
    const { rockin } = this.state;
    return (
      <View style={styles.container}>
        <Logo />
        <Title />
        <Box rockin>
          <Box.Text>25:00</Box.Text>
        </Box>
        <Box rockin>
          <Box.Text>3!</Box.Text>
        </Box>
        <ButtonBox>
          <Button modifiers='pauseResume' />
          <Button modifiers='stopSettings' />
        </ButtonBox>
        <Footer content='~g' />
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
  }
});
