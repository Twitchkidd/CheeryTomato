import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { eigengrau, headerFont } from "../utilities";

class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <FooterText>{this.props.content}</FooterText>
      </FooterBox>
    );
  }
}

const FooterBox = styled.View`
  margin-bottom: 25px;
`;

const FooterText = styled.Text`
  color: ${eigengrau};
  font-family: ${headerFont};
  font-size: 18px;
`;

export default Footer;
