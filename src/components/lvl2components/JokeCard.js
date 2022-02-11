import React from "react";
import { JokecardBox, JokeIcon, JokeNicons, JokeText } from "../../Styles";
import { FiTwitter } from "react-icons/fi";
function JokeCard() {
  return (
    <JokecardBox>
      <JokeNicons>
        <JokeText>
          why do python programmers wear glasses? Because they can't C.
        </JokeText>
        <JokeIcon>
          <FiTwitter />
        </JokeIcon>
      </JokeNicons>
    </JokecardBox>
  );
}

export default JokeCard;
