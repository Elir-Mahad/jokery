import styled from "styled-components";

export const WholeApp = styled.div`
  // position: relative;
  background-color: #fcfdfd;
`;

//  Header

export const HeaderBox = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 8rem;
  padding-top: 2rem;
  position: relative;
  background-color: #9ed6b6;
`;

export const Heading = styled.h2`
  text-align: center;
  position: relative;
  top: 12px;
  font-weight: 100;
  font-size: 2rem;
  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
`;

// Joke card

export const JokecardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: -3rem;
  position: relative;
  z-index: 2;
  // background-color: red;
`;

export const JcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: -7rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const JcHead = styled.div`
  //
  background-color: white;
  border: 2px solid black;
  width: 21.4rem;
  height: 4.4rem;
  border-radius: 2rem;
  margin-bottom: -3.6rem;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const JokeNicons = styled.div`
  border: 2px solid black;
  border-radius: 1.5rem;
  width: 20rem;
  min-height: 25rem;
  background-color: white;
  //
  position: relative;
  z-index: 3;
  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  //
  @media (max-width: 400px) {
    width: 95%;
  }
  //
`;

export const JokeWords = styled.div`
  height: 100%;
`;

export const JwCat = styled.p`
  text-align: center;
  padding: 0.5rem;
  color: darkblue;
  border: 1px solid black;
  border-radius: 1rem;
  color: darkblue;
  width: 9rem;
`;

export const JokeSetupDelivery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const JokeFullOneLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const JokeText = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem;
  line-height: 2rem;
  word-break: break-word;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
  // @media (max-width: 400px) {
  //   font-size: 1.1rem;
  // }
`;

export const JtIcon = styled.img`
  height: 1.5rem;
  padding-right: 0.5rem;
`;

export const JcBottom = styled.div`
  //
  background-color: white;
  border: 2px solid black;
  width: 21.4rem;
  height: 4.4rem;
  border-radius: 2rem;
  margin-top: -3.6rem;
  z-index: 1;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const JokeIcon = styled.button`
  display: block;
  margin: auto;
  font-size: 2rem;
  background-color: transparent;
  border: none;
`;

export const ShowJoke = styled.button`
  margin-top: 3rem;
  width: 20rem;
  height: 3.2rem;
  border-radius: 2rem;
  border: 1px solid black;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #feae84;
  @media (max-width: 500px) {
    font-size: 1rem;
    height: 3rem;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const Reset = styled.button`
  margin-top: 1rem;
  font-size: 1.2rem;
  width: 20rem;
  height: 3.2rem;
  border-radius: 2rem;
  border: 1px solid black;
  cursor: pointer;
  background-color: #5cbfe7;
  color: white;
  @media (max-width: 500px) {
    font-size: 1rem;
    height: 3rem;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;

// Settings

export const SettingsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  margin-top: -7rem;
  position: relative;
  z-index: 2;
  background-color: white;
  padding-top: 1rem;
  @media (max-width: 450px) {
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: unset;
  }
`;

export const SettingsPageHeading = styled.h2`
  //
`;

export const SetBox = styled.div`
  width: 25rem;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SetHeading = styled.p`
  margin-bottom: 1.5rem;
  padding: 0.2rem;
  font-size: 1.5rem;
  @media (max-width: 450px) {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;

export const SetOptions = styled.div`
  //
`;

export const OneSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const OsNameIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const OsName = styled.p`
  font-size: 1.2rem;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const OsIcon = styled.img`
  height: 2rem;
  margin-right: 0.5em;
`;

export const OsInput = styled.input`
  padding-right: 1rem;
  height: 1.1rem;
  width: 1.1rem;
`;

export const SaveButtonBox = styled.div`
  //
`;

export const SaveButton = styled.button`
  background-color: #5cbfe7;
  color: white;
  border: 1px solid black;
  border-radius: 1rem;
  //
  height: 3.2rem;
  width: 25rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  //
  cursor: pointer;
  @media (max-width: 450px) {
    font-size: 1rem;
    height: 3rem;
    width: 95%;
  }
`;

// Giphy

export const LoadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Footer

export const FooterBox = styled.div`
  margin-top: 3rem;
  border-top: 1px solid black;
  width: 100%;
  // @media (max-width: 500px) {
  //   font-size: 1.4rem;
  // }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;
