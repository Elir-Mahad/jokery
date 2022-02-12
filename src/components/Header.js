import React from "react";
import {
  HeaderBox,
  LogoSettings,
  Logo,
  SettingsIcon,
  Heading,
} from "../Styles";
import logoimage from "../assets/logo.png";
import { AiOutlineSetting } from "react-icons/ai";
function Header() {
  return (
    <HeaderBox>
      <LogoSettings>
        <Logo src={logoimage} />
        <SettingsIcon>
          <AiOutlineSetting />
        </SettingsIcon>
      </LogoSettings>
      <Heading>Jokery</Heading>
    </HeaderBox>
  );
}

export default Header;
