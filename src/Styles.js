import styled from "styled-components";

export const WholeApp = styled.div`
  // position: relative;
`;

//  Header

export const HeaderBox = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 8rem;
  padding-top: 2rem;
  position: relative;
  background-color: lightgrey;
`;

export const Heading = styled.h2`
  text-align: center;
  position: relative;
  top: 12px;
  @media (max-width: 500px) {
    font-size: 1.4rem;
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
`;

export const JcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -7rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const JcHead = styled.div`
  //
  background-color: white;
  border: 1px solid black;
  width: 21.4rem;
  height: 4.4rem;
  border-radius: 2rem;
  margin-bottom: -3.6rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const JokeNicons = styled.div`
  border: 1px solid black;
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
  @media (max-width: 500px) {
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
  position: fixed;
  margin-top: -0.3rem;
  margin-left: 0.5rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: lightgrey;
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
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const JcBottom = styled.div`
  //
  background-color: white;
  border: 1px solid black;
  width: 21.4rem;
  height: 4.4rem;
  border-radius: 2rem;
  margin-top: -3.6rem;
  z-index: 1;
  @media (max-width: 500px) {
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
  width: 18rem;
  height: 3.2rem;
  border-radius: 2rem;
  border: 1px solid black;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 12rem;
    font-size: 1rem;
    height: 3rem;
  }
`;

export const Reset = styled.button`
  margin-top: 1rem;
  font-size: 1.2rem;
  width: 12rem;
  height: 3.2rem;
  border-radius: 2rem;
  border: 1px solid black;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 8rem;
    font-size: 1rem;
    height: 3rem;
  }
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
`;

export const SettingsPageHeading = styled.h2`
  //
`;

export const SetBox = styled.div`
  width: 25rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SetHeading = styled.p`
  color: darkblue;
  margin-bottom: 1.5rem;
  padding: 0.2rem;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;

export const SetOptions = styled.div`
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
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

export const OsName = styled.p`
  font-size: 1.2rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const OsInput = styled.input`
  padding-right: 1rem;
`;

export const SaveButtonBox = styled.div`
  width: 25rem;
  padding: 1rem;
  padding-top: 2rem;
  @media (max-width: 500px) {
    width: 15rem;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 3.5rem;
  font-size: 1.2rem;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1rem;
    height: 3rem;
  }
`;
