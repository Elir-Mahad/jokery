import React from "react";
import {
  SettingsPage,
  SetBox,
  SetHeading,
  SetOptions,
  OneSet,
  OsInput,
  OsName,
  SaveButton,
  SaveButtonBox,
  SettingsPageHeading,
} from "../Styles";

function Settings() {
  return (
    <SettingsPage>
      <SettingsPageHeading>Settings</SettingsPageHeading>
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
      {/*  */}
      <SetBox>
        <SetHeading> Choose a rating</SetHeading>
        <SetOptions>
          <OneSet>
            <OsName>General</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
          <OneSet>
            <OsName>R-rated</OsName>
            <OsInput type="checkbox" value="" id="" name="" />
          </OneSet>
        </SetOptions>
      </SetBox>
      {/*  */}
      <SaveButtonBox>
        <SaveButton>Save</SaveButton>
      </SaveButtonBox>
    </SettingsPage>
  );
}

export default Settings;
