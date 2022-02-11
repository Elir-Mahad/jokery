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
      {/*  */}
      <SetBox>
        <SetHeading> Choose a category</SetHeading>
        <SetOptions>
          <OneSet>
            <OsName>Any</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
          <OneSet>
            <OsName>Programming</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
        <SetOptions>
          <OneSet>
            <OsName>Dark</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
          <OneSet>
            <OsName>Pun</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
        <SetOptions>
          <OneSet>
            <OsName>Spooky</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
          <OneSet>
            <OsName>Christmas</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
        <SetOptions>
          <OneSet>
            <OsName>Miscellaneous</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
      </SetBox>
    </SettingsPage>
  );
}

export default Settings;
