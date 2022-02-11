import React from "react";
import {
  SettingsPage,
  SetBox,
  SetHeading,
  SetOptions,
  OneSet,
  OsInput,
  OsName,
} from "../Styles";

function Settings() {
  return (
    <SettingsPage>
      <h1>Settings</h1>
      <SetBox>
        <SetHeading> Choose a type</SetHeading>
        <SetOptions>
          <OneSet>
            <OsName>2 lines</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
          <OneSet>
            <OsName>1 line</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
      </SetBox>
    </SettingsPage>
  );
}

export default Settings;
