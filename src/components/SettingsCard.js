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
import Loading from "./Loading";
import randomicon from "../assets/randomicon.png";
import programmingicon from "../assets/programingicon.png";
import darkicon from "../assets/darkicon.png";
import punicon from "../assets/punicon.png";
import miscicon from "../assets/miscicon.png";

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

  const saveUrlHideSettings = () => {
    // When this function gets triggered
    setSettingContainer(false);
    // hide the settings
    setJokeContainer(true);
    // show the joke card
    setTempText(false);
    // hide the joke cards button placeholder text
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
    // "1914 translation by H. Rackh But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. 1914 translation by H. Rackham On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    "Have a great weekend! I hope your code behaves the same on Monday as it did on Friday."
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
    setFullJoke(<Loading />);
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
