import React, { useState } from "react";
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
  //
  JokecardBox,
  JokeIcon,
  JokeNicons,
  JokeText,
  ShowJoke,
  Reset,
} from "../Styles";
import { FiTwitter } from "react-icons/fi";
import Axios from "axios";

function SettingsCard() {
  //
  const [settingContainer, setSettingContainer] = useState(true);
  const [jokeContainer, setJokeContainer] = useState(false);
  //
  const hideSet = () => {
    setSettingContainer(false);
    setJokeContainer(true);
  };

  const showSet = () => {
    setSettingContainer(true);
    setJokeContainer(false);
  };

  //
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokeDelivery, setJokeDelivery] = useState("");
  const [fullJoke, setFullJoke] = useState("");

  //

  const getJoke = () => {
    Axios.get(
      `https://v2.jokeapi.dev/joke/${jokeCat}?blacklistFlags=${rating}&type=${jokeType}`
    ).then((response) => {
      console.log(response);
      setJokeSetup(response.data.setup);
      setJokeDelivery(response.data.delivery);
      setFullJoke(response.data.joke);
    });
  };

  return (
    <div>
      {settingContainer && (
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
            <SaveButton onClick={hideSet}>Save</SaveButton>
          </SaveButtonBox>
        </SettingsPage>
      )}
      {/*  */}
      {jokeContainer && (
        <JokecardBox>
          <JokeNicons>
            <JokeText>why do python programmers wear glasses?</JokeText>
            <JokeText>Because they can't C.</JokeText>
            <JokeIcon>
              <FiTwitter />
            </JokeIcon>
          </JokeNicons>
          <ShowJoke>Show joke</ShowJoke>
          <Reset>Reset</Reset>
        </JokecardBox>
      )}
    </div>
  );
}

export default SettingsCard;
