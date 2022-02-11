import React from "react";
import { JokecardBox, JokeIcon, JokeNicons, JokeText } from "../../Styles";

function JokeCard() {
  return (
    <JokecardBox>
      <JokeNicons>
        <JokeText>
          why do python programmers wear glasses? Because they can't C.
        </JokeText>
        <JokeIcon>icon</JokeIcon>
      </JokeNicons>
    </JokecardBox>
  );
}

export default JokeCard;
