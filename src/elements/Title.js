import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Title = props => {
  return <Text {...props}>Cheery Tomato!</Text>;
};

const StyledTitle = styled(Title)`
  font-size: 40;
  text-align: center;
  margin: 10px;
  font-family: "RobotoSlab-Regular";
`;

export default StyledTitle;
