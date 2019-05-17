import React, { Component } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { applyStyleModifiers } from "styled-components-modifiers";
import { pause, resume, disabled, disabledText, textFont } from "../utilities";

const BUTTON_MODIFIERS = {
  pauseResume: () => `
    background-color: \${pause};
  `,
  stopSettings: () => `
    background-color: \${disabled};
  `
};
//Oh, that's such a good idea for some things but making two seperate components would be so much
//simpler, like the style things should be their own sorta thing you can import into both, or just
//NOT LIKE THIS. NOT LIKE THIS
// Oh I've been avoiding export const styled but that's a thing! I've got to start again in the morning!

const ButtonView = styled.View`
  width: 120;
  height: 120;
  border-radius: 60;
  background-color: ${disabledText};
  margin: 15px;
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

const ButtonButton = styled.Button`
  color: ${disabledText};
  background-color: ${resume};
  font-family: ${textFont};
`;

class AppButton extends Component {
  onPressLearnMore = () => {
    console.log("Boop!");
  };
  render() {
    return (
      <ButtonView>
        <ButtonButton title='button' onPress={this.onPressLearnMore} />
      </ButtonView>
    );
  }
}

export default AppButton;
