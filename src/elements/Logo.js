import React from "react";
import styled from "styled-components/native";
import Logo from "../images/logo.svg";

const AppLogo = props => <Logo width={160} height={148} {...props} />;

const StyledLogo = styled(AppLogo)`
  margin: 20px;
`;

export default StyledLogo;
