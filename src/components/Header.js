import React from "react";
import {
  HeaderBox,
  LogoSettings,
  Logo,
  SettingsIcon,
  Heading,
} from "../Styles";
import logoimage from "../../assets/logo.png";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
function Header() {
  return (
    <HeaderBox>
      <LogoSettings>
        <Link to="/">
          <Logo src={logoimage} />
        </Link>
        <Link to="/settings">
          <SettingsIcon>
            <AiOutlineSetting />
          </SettingsIcon>
        </Link>
      </LogoSettings>
      <Heading>Jokery</Heading>
    </HeaderBox>
  );
}

export default Header;
