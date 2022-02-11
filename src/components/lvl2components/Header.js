import React from "react";
import {
  HeaderBox,
  LogoSettings,
  Logo,
  SettingsIcon,
  Heading,
} from "../../Styles";
import logoimage from "../../assets/logo.png";
function Header() {
  return (
    <HeaderBox>
      <LogoSettings>
        <Logo src={logoimage} />
        <SettingsIcon>x</SettingsIcon>
      </LogoSettings>
      <Heading>Jokery</Heading>
    </HeaderBox>
  );
}

export default Header;
