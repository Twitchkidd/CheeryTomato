import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { applyStyleModifiers } from "styled-components-modifiers";
import {
  pause,
  resume,
  eigengrau,
  disabled,
  disabledText,
  textFont
} from "../utilities";

const BUTTON_MODIFIERS = {
  pauseResume: () => `
    background-color: ${pause};
  `,
  stopSettings: () => `
    background-color: ${resume};
  `
};

const ButtonView = styled.TouchableOpacity`
  width: 110;
  height: 110;
  border-radius: 55;
  background-color: ${disabledText};
  margin: 15px;
  margin-top: 5px;
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${eigengrau};
  font-family: ${textFont};
  font-size: 20px;
`;

class AppButton extends Component {
  onPressLearnMore = () => {
    console.log("Boop!");
  };
  render() {
    return (
      <ButtonView
        modifiers={this.props.modifiers}
        onPress={this.onPressLearnMore}>
        <ButtonText>BUTTON</ButtonText>
      </ButtonView>
    );
  }
}

// Does this need state? I think not. I think it needs to react to props and onPress run something a level up.
// Also that Button.Text format looks pretty good here too!

export default AppButton;
