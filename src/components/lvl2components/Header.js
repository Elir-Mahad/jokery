import React from "react";
import { HeaderBox, LogoSettings, Logo, SettingsIcon } from "../../Styles";
import logoimage from "../../assets/logo.png";
function Header() {
  return (
    <HeaderBox>
      <LogoSettings>
        <Logo src={logoimage} />
        <SettingsIcon>x</SettingsIcon>
      </LogoSettings>
    </HeaderBox>
  );
}

export default Header;
