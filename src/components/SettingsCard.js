import React, { useState, useEffect } from "react";
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
  JokeFullOneLine,
} from "../Styles";
import { FiTwitter } from "react-icons/fi";
import Axios from "axios";

function SettingsCard() {
  // -------- PAGE SET UP

  //! Create constant to store the joke card and the settings

  const [settingContainer, setSettingContainer] = useState(false);
  // The settings container is set to false

  const [jokeContainer, setJokeContainer] = useState(true);
  // The joke card container is set to true.

  //! Create the ability to switch between the joke card and the settings

  const hideSet = () => {
    // When this function gets triggered
    setSettingContainer(false);
    // hide the settings
    setJokeContainer(true);
    // show the joke card
  };

  const showSet = () => {
    // When theis function gets triggered
    setJokeContainer(false);
    // hide the joke card
    setSettingContainer(true);
    // show the settings
  };

  // ------------- FETCH DATA AND ALTER API URL BASED ON USER SELECTION

  //! Create constants to store the api data end points

  const [jokeSetup, setJokeSetup] = useState("");
  // This will store the joke set up for two part jokes

  const [jokeDelivery, setJokeDelivery] = useState("");
  // This will store the joke delivery for two part jokes

  const [fullJoke, setFullJoke] = useState("");
  // This will store the full joke for single jokes

  //! Fetch api data and store end points in the correct constants

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

  //! Change between different joke types

  const [jokeType, setJokeType] = useState("single");
  // This will store the joketype parameter for the api url

  const changeToTwoPartJk = () => {
    // When this function is triggered
    setJokeType("twopart");
    // change the joke type to two parts
  };

  const changeToOnePartJk = () => {
    // When this function is triggered
    setJokeType("single");
    // change the joke type to single
  };

  //! Change between different joke categories

  const [jokeCat, setJokeCat] = useState("any");
  // This will store the joke category parameter for the api url

  const changeToProgramming = () => {
    // When this function is triggered
    setJokeCat("Programming");
    // change the category to programming
  };

  const changeToMiscellaneous = () => {
    // When this function is triggered
    setJokeCat("Miscellaneous");
    // change the category to miscellaneous
  };

  const changeToDark = () => {
    // When this function is triggered
    setJokeCat("Dark");
    // change the category to dark
  };

  const changeToPun = () => {
    // When this function is triggered
    setJokeCat("Pun");
    // change the category to pun
  };

  const changeToSpooky = () => {
    // When this function is triggered
    setJokeCat("Spooky");
    // change the category to spooky
  };

  const changeToChristmas = () => {
    // When this function is triggered
    setJokeCat("Christmas");
    // change the category to christmas
  };

  const changeToAny = () => {
    // When this function is triggered
    setJokeCat("Any");
    // change the category to any
  };

  //! Change between different joke ratings

  const [rating, setRating] = useState("");
  // This will store the flag blacklistFlags parameter for the api url

  const changeToVulgar = () => {
    // When this function is triggered
    setRating("");
    // remove all censors
  };

  const changeToCensored = () => {
    // When this function is triggered
    setRating("nsfw,religious,political,racist,sexist,explicit");
    // censore all inappropriate jokes
  };

  // ------------- AFTER THE DATA GETS FETCHED

  //! Store single jokes  two part jokes in different divs

  const [oneLineJk, setOneLineJk] = useState(false);
  // This will store the div which contains the single line joke

  const [twoLineJk, setTwoLineJk] = useState(true);
  // This will store the div which contains the two line joke

  //! Show two part joke div
  //! or single part joke div
  //! based on user selections

  const showPunchDelJk = () => {
    // When this function gets triggered
    changeToTwoPartJk();
    // change the joke type to two part
    setOneLineJk(false);
    // hide the single line jk div
    setTwoLineJk(true);
    // show the two line jk div
  };

  const showFullJk = () => {
    // When this function gets triggered
    changeToOnePartJk();
    // change the joke type to single
    setTwoLineJk(false);
    // hide the two line jk div
    setOneLineJk(true);
    // show the single line jk div
  };

  return (
    <div>
      {settingContainer && (
        <SettingsPage>
          {/* <SettingsPageHeading>Settings</SettingsPageHeading> */}
          <SetBox>
            <SetHeading> Choose a joke type</SetHeading>
            <SetOptions>
              <OneSet>
                <OsName>Two part</OsName>
                <OsInput onClick={showPunchDelJk} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsName>Single</OsName>
                <OsInput onClick={showFullJk} type="checkbox" />
              </OneSet>
            </SetOptions>
          </SetBox>
          {/*  */}
          <SetBox>
            <SetHeading> Choose a joke category</SetHeading>
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
            <SetHeading> Choose a joke rating</SetHeading>
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
                {twoLineJk && (
                  <JokeSetupDelivery>
                    <JokeText>{jokeSetup}</JokeText>
                    <JokeText>{jokeDelivery}</JokeText>
                  </JokeSetupDelivery>
                )}
                {oneLineJk && (
                  <JokeFullOneLine>
                    <JokeText>{fullJoke}</JokeText>
                  </JokeFullOneLine>
                )}
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
