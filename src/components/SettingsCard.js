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
  OsNameIcon,
  OsIcon,
  JtIcon,
} from "../Styles";
// import { FiTwitter } from "react-icons/fi";
import Axios from "axios";
import Loading from "./Loading";
//
import singleicon from "../assets/singleicon.png";
import twoparticon from "../assets/twoparticon.png";
//
import randomicon from "../assets/randomicon.png";
import programmingicon from "../assets/programingicon.png";
import darkicon from "../assets/darkicon.png";
import punicon from "../assets/punicon.png";
import miscicon from "../assets/miscicon.png";
//
import goodicon from "../assets/g-rated-icon.png";
import badicon from "../assets/r-rated-icon.png";
//
import Bounce from "react-reveal/Bounce";

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

  //! Let 'show joke' button's text change, based on the user's joke category selection

  const [jcButtonText, setJcButtonText] = useState();
  // This will store the joke card's 'show joke' button text

  const [tempText, setTempText] = useState(true);
  // This will store the placeholder text for the joke card's 'show joke' button

  //! Let user Select joke category

  const [jokeCat, setJokeCat] = useState("Programming");
  // This will store the joke category parameter for the api url

  const changeToProgramming = () => {
    // When this function is triggered
    setJokeCat("Programming");
    // change the category to programming
    setJcButtonText("Show me a programming joke");
    // set the value of the joke card button text to this string
  };

  const changeToMiscellaneous = () => {
    // When this function is triggered
    setJokeCat("Miscellaneous");
    // change the category to miscellaneous
    setJcButtonText("Show me a weird joke");
    // set the value of the joke card button text to this string
  };

  const changeToDark = () => {
    // When this function is triggered
    setJokeCat("Dark");
    // change the category to dark
    setJcButtonText("Show me a dark joke");
    // set the value of the joke card button text to this string
  };

  const changeToPun = () => {
    // When this function is triggered
    setJokeCat("Pun");
    // change the category to pun
    setJcButtonText("Show me a pun joke");
    // set the value of the joke card button text to this string
  };

  const changeToAny = () => {
    // When this function is triggered
    setJokeCat("Any");
    // change the category to any
    setJcButtonText("Show me a random joke");
    // set the value of the joke card button text to this string
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

  const checkUserCategorySelection = () => {
    //
    if (jcButtonText === undefined) {
      // if the user didn't select any text,
      // which means that jcButtonText will be underfined
      setJcButtonText("Show me a programming joke");
      // set the button text to this string
    }
  };

  const saveUrlHideSettings = () => {
    // When this function gets triggered
    setSettingContainer(false);
    // hide the settings
    setJokeContainer(true);
    // show the joke card
    setTempText(false);
    // hide the joke cards button placeholder text
    checkUserCategorySelection();
    // trigger this function
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
    "Have a great weekend! I hope your code behaves the same on Monday as it did on Friday."
  );
  // This will store the full joke for single jokes

  const [wobble, setWobble] = useState(0);
  // This is the animation on the joke text
  // It will get triggered when the getJoke function is triggered below

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
      setWobble(1);
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
    setJokeSetup(<Loading />);
    // show the placeholder text
    setJokeDelivery("");
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
    setFullJoke(<Loading />);
    // show the placeholder text
  };

  return (
    <div>
      {settingContainer && (
        <SettingsPage>
          <SetBox>
            <Bounce duration={3000} top cascade>
              <SetHeading> Choose a joke type</SetHeading>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={singleicon} />
                  <OsName>One liner</OsName>
                </OsNameIcon>
                <OsInput onClick={showFullJk} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={twoparticon} />
                  <OsName>Hook + punchline</OsName>
                </OsNameIcon>
                <OsInput onClick={showPunchDelJk} type="checkbox" />
              </OneSet>
            </Bounce>
          </SetBox>
          {/*  */}
          <SetBox>
            <Bounce duration={3000} top cascade>
              <SetHeading> Choose a joke category</SetHeading>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={randomicon} />
                  <OsName>Random</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToAny} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={programmingicon} />
                  <OsName>Programming</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToProgramming} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={darkicon} />
                  <OsName>Dark</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToDark} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={punicon} />
                  <OsName>Pun</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToPun} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={miscicon} />
                  <OsName>Miscellaneous</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToMiscellaneous} type="checkbox" />
              </OneSet>
            </Bounce>
          </SetBox>
          {/*  */}
          <SetBox>
            <Bounce duration={3000} top cascade>
              <SetHeading> Choose a joke rating</SetHeading>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={goodicon} />
                  <OsName>General</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToCensored} type="checkbox" />
              </OneSet>
              <OneSet>
                <OsNameIcon>
                  <OsIcon src={badicon} />
                  <OsName>R-rated</OsName>
                </OsNameIcon>
                <OsInput onClick={changeToVulgar} type="checkbox" />
              </OneSet>
            </Bounce>
          </SetBox>
          {/*  */}
          {/* <SaveButtonBox> */}
          <SaveButton onClick={saveUrlHideSettings}>
            Save your settings
          </SaveButton>
          {/* </SaveButtonBox> */}
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
                    <JokeText>
                      <span
                        className="joketext"
                        onAnimationEnd={() => setWobble(0)}
                        wobble={wobble}
                      >
                        <JtIcon src={twoparticon} /> {jokeSetup} <br />
                        <JtIcon
                          style={{
                            paddingTop: "2rem",
                          }}
                          src={singleicon}
                        />
                        {jokeDelivery}
                      </span>
                    </JokeText>
                  </JokeSetupDelivery>
                )}
                {oneLineJk && (
                  <JokeFullOneLine>
                    <JokeText>
                      <span
                        className="joketext"
                        onAnimationEnd={() => setWobble(0)}
                        wobble={wobble}
                      >
                        <JtIcon src={singleicon} />
                        {fullJoke}
                      </span>
                    </JokeText>
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
            {/*  */}
            {tempText && <span>Show me a programming joke</span>}
            {/* this span is shown before the user modifies setting */}
            {jcButtonText}
            {/* after the user modifies setting, 
            tempText is hidden and jsButtonText will display strings 
            based on the user category selection */}
          </ShowJoke>
          <Reset onClick={showSet}>Reset your settings</Reset>
        </JokecardBox>
      )}
    </div>
  );
}

export default SettingsCard;
