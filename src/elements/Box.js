import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { rocknroll, rest, eigengrau, textFont } from "../utilities";

const BoxText = styled.Text`
  color: ${eigengrau};
  font-family: ${textFont};
  font-size: 20px;
`;

export default (Box = styled.View`
  width: 80%;
  height: 60;
  border: 4px solid ${props => (props.rockin ? rocknroll : rest)};
  align-items: center;
  justify-content: center;
  margin-bottom: 20;
`);

Box.Text = BoxText;
