import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { primary, headerFont } from "../utilities";

const Title = props => {
  return <Text {...props}>Cheery Tomato!</Text>;
};

const StyledTitle = styled(Title)`
  color: ${primary};
  font-size: 40;
  text-align: center;
  margin: 10px;
  margin-bottom: 40px;
  font-family: ${headerFont};
`;

export default StyledTitle;
