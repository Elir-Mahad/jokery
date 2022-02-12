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
  JcHead,
  JcWrapper,
  JcBottom,
  JokeWords,
  JokeSetupDelivery,
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

  // manage joke types

  const [jokeType, setJokeType] = useState("single");

  const changeToTwoPartJk = () => {
    setJokeType("twopart");
  };

  const changeToOnePartJk = () => {
    setJokeType("single");
  };

  // manage categries

  const [jokeCat, setJokeCat] = useState("any");

  const changeToProgramming = () => {
    setJokeCat("Programming");
  };

  const changeToMiscellaneous = () => {
    setJokeCat("Miscellaneous");
  };

  const changeToDark = () => {
    setJokeCat("Dark");
  };

  const changeToPun = () => {
    setJokeCat("Pun");
  };

  const changeToSpooky = () => {
    setJokeCat("Spooky");
  };

  const changeToChristmas = () => {
    setJokeCat("Christmas");
  };

  const changeToAny = () => {
    setJokeCat("Any");
  };

  // manage ratings

  const [rating, setRating] = useState("");

  const changeToVulgar = () => {
    setRating("");
  };

  const changeToCensored = () => {
    setRating("nsfw,religious,political,racist,sexist,explicit");
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
                <OsName>Two part</OsName>
                <OsInput onClick={changeToTwoPartJk} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>Single</OsName>
                <OsInput onClick={changeToOnePartJk} type="checkbox" />
              </OneSet>
            </SetOptions>
          </SetBox>
          {/*  */}
          <SetBox>
            <SetHeading> Choose a category</SetHeading>
            <SetOptions>
              <OneSet>
                <OsName>Any</OsName>
                <OsInput onClick={changeToAny} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>Programming</OsName>
                <OsInput onClick={changeToProgramming} type="checkbox" />
              </OneSet>
            </SetOptions>
            <SetOptions>
              <OneSet>
                <OsName>Dark</OsName>
                <OsInput onClick={changeToDark} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>Pun</OsName>
                <OsInput onClick={changeToPun} type="checkbox" />
              </OneSet>
            </SetOptions>
            {/* <SetOptions>
              <OneSet>
                <OsName>Spooky</OsName>
                <OsInput onClick={changeToSpooky} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>Christmas</OsName>
                <OsInput onClick={changeToChristmas} type="checkbox" />
              </OneSet>
            </SetOptions> */}
            <SetOptions>
              <OneSet>
                <OsName>Miscellaneous</OsName>
                <OsInput onClick={changeToMiscellaneous} type="checkbox" />
              </OneSet>
            </SetOptions>
          </SetBox>
          {/*  */}
          <SetBox>
            <SetHeading> Choose a rating</SetHeading>
            <SetOptions>
              <OneSet>
                <OsName>General</OsName>
                <OsInput onClick={changeToCensored} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>R-rated</OsName>
                <OsInput onClick={changeToVulgar} type="checkbox" />
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
          <JcWrapper>
            <JcHead></JcHead>
            <JokeNicons>
              <JokeWords>
                <JokeSetupDelivery>
                  <JokeText>{jokeSetup}</JokeText>
                  <JokeText>{jokeDelivery}</JokeText>
                </JokeSetupDelivery>
                <JokeText>{fullJoke}</JokeText>
              </JokeWords>
              <JokeIcon>
                <FiTwitter />
              </JokeIcon>
            </JokeNicons>
            <JcBottom></JcBottom>
          </JcWrapper>
          <ShowJoke onClick={getJoke}>Show joke</ShowJoke>
          <Reset onClick={showSet}>Reset</Reset>
        </JokecardBox>
      )}
    </div>
  );
}

export default SettingsCard;
