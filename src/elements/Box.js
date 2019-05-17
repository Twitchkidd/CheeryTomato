import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { disabled, disabledText, textFont } from "../utilities";

class Box extends Component {
  render() {
    return (
      <BoxView>
        <BoxText>{this.props.content}</BoxText>
      </BoxView>
    );
  }
}

const BoxView = styled.View`
  width: 80%;
  height: 60;
  background-color: ${disabled};
  align-items: center;
  justify-content: center;
  margin-bottom: 20;
`;

const BoxText = styled.Text`
  color: ${disabledText};
  font-family: ${textFont};
  font-size: 20px;
`;

export default Box;
