import React from "react";
import {
  JokecardBox,
  JokeIcon,
  JokeNicons,
  JokeText,
  ShowJoke,
} from "../../Styles";
import { FiTwitter } from "react-icons/fi";
function JokeCard() {
  return (
    <JokecardBox>
      <JokeNicons>
        <JokeText>why do python programmers wear glasses?</JokeText>
        <JokeText>Because they can't C.</JokeText>
        <JokeIcon>
          <FiTwitter />
        </JokeIcon>
        <ShowJoke>Show joke</ShowJoke>
      </JokeNicons>
    </JokecardBox>
  );
}

export default JokeCard;
