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
  JwCat,
} from "../Styles";
// import { FiTwitter } from "react-icons/fi";
import Axios from "axios";

function SettingsCard() {
  // -------- PAGE SET UP

  //! In the beginning, hide the settings, show the joke card

  const [settingContainer, setSettingContainer] = useState(false);
  // The settings container is set to false

  const [jokeContainer, setJokeContainer] = useState(true);
  // The joke card container is set to true.

  //! When user clicks reset button, show the settings

  const showSet = () => {
    // When this function gets triggered
    setJokeContainer(false);
    // hide the joke card
    setSettingContainer(true);
    // show the settings
  };

  // ------------- DEFINE API URL BASED ON USER SELECTION AND THEN FETCH DATA

  //! Let user select joke type

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

  //! Manage joke cateogory settings names

  const [editedCategoryName, setEditedCategoryName] = useState();

  const [tempText, setTempText] = useState(true);

  const anyy = "Show me a random joke";

  const programmyy = "Show me a programming joke";

  const darkyy = "Show me a dark joke";

  const punyy = "Show me a pun joke";

  const miscyy = "Show me a weird joke";

  //! Let user Select joke category

  const [jokeCat, setJokeCat] = useState("Programming");
  // This will store the joke category parameter for the api url

  const changeToProgramming = () => {
    // When this function is triggered
    setJokeCat("Programming");
    // change the category to programming
    setEditedCategoryName(programmyy);
  };

  const changeToMiscellaneous = () => {
    // When this function is triggered
    setJokeCat("Miscellaneous");
    // change the category to miscellaneous
    setEditedCategoryName(miscyy);
  };

  const changeToDark = () => {
    // When this function is triggered
    setJokeCat("Dark");
    // change the category to dark
    setEditedCategoryName(darkyy);
  };

  const changeToPun = () => {
    // When this function is triggered
    setJokeCat("Pun");
    // change the category to pun
    setEditedCategoryName(punyy);
  };

  const changeToAny = () => {
    // When this function is triggered
    setJokeCat("Any");
    // change the category to any
    setEditedCategoryName(anyy);
  };

  //! Let user select joke rating

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

  //! Save the user selections and hide settings

  const saveUrlHideSettings = () => {
    // When this function gets triggered
    setSettingContainer(false);
    // hide the settings
    setJokeContainer(true);
    // show the joke card
    setTempText(false);
  };

  //! Create constants to store the api data end points

  const [jokeSetup, setJokeSetup] = useState(
    "Why did the functional programmer get thrown out of school?"
  );
  // This will store the joke set up for two part jokes

  const [jokeDelivery, setJokeDelivery] = useState(
    "Because he refused to take classes."
  );
  // This will store the joke delivery for two part jokes

  const [fullJoke, setFullJoke] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // "Have a great weekend! I hope your code behaves the same on Monday as it did on Friday."
  );
  // This will store the full joke for single jokes

  //! Fetch api data and store end points in the correct constants

  const getJoke = () => {
    Axios.get(
      `https://v2.jokeapi.dev/joke/${jokeCat}?blacklistFlags=${rating}&type=${jokeType}`
    ).then((response) => {
      console.log(response.data);
      setJokeSetup(response.data.setup);
      setJokeDelivery(response.data.delivery);
      setFullJoke(response.data.joke);
      setJokeCat(response.data.category);
    });
  };
  // console.log(jokeCat);

  // ------------- AFTER THE DATA GETS FETCHED

  //! Store single jokes and two part jokes in different divs

  const [oneLineJk, setOneLineJk] = useState(true);
  // This will store the div which contains the single line joke

  const [twoLineJk, setTwoLineJk] = useState(false);
  // This will store the div which contains the two line joke

  //! If user selected two part joke, then show the twolinkjk div

  const showPunchDelJk = () => {
    // When this function gets triggered
    changeToTwoPartJk();
    // change the joke type to two part
    setOneLineJk(false);
    // hide the single line jk div
    setTwoLineJk(true);
    // show the two line jk div
    setJokeSetup("no joke here yet 1");
    // show the placeholder text
    setJokeDelivery("no joke here yet 2");
  };

  //! If user selected the single joke, then show the onelinkjkdiv

  const showFullJk = () => {
    // When this function gets triggered
    changeToOnePartJk();
    // change the joke type to single
    setTwoLineJk(false);
    // hide the two line jk div
    setOneLineJk(true);
    // show the single line jk div
    setFullJoke("no joke here yet");
    // show the placeholder text
  };

  return (
    <div>
      {settingContainer && (
        <SettingsPage>
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
                <OsName>Random</OsName>
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
            <SaveButton onClick={saveUrlHideSettings}>Save</SaveButton>
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
              {/* <JokeIcon>
                <FiTwitter />
              </JokeIcon> */}
            </JokeNicons>
            <JcBottom></JcBottom>
          </JcWrapper>
          <ShowJoke onClick={getJoke}>
            {tempText && <span>Show me a programming joke</span>}
            {editedCategoryName}
          </ShowJoke>
          <Reset onClick={showSet}>Reset</Reset>
        </JokecardBox>
      )}
    </div>
  );
}

export default SettingsCard;
