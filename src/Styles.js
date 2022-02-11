import styled from "styled-components";

//  Header

export const HeaderBox = styled.div`
  border: 1px solid red;
`;

export const LogoSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const SettingsIcon = styled.button`
  //
`;

export const Heading = styled.h2`
  text-align: center;
`;

// Joke card

export const JokecardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const JokeNicons = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 20rem;
  margin-top: 1rem;
`;

export const JokeText = styled.p`
  font-size: 2rem;
  text-align: center;
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
  width: 10rem;
  height: 3rem;
  font-size: 1.2rem;
`;

// Footer

export const FooterBox = styled.div`
  margin-top: 3rem;
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  text-align: center;
`;

// Settings

export const SettingsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

export const SetBox = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 25rem;
  font-size: 1.4rem;
`;

export const SetHeading = styled.p`
  display: block;
  margin: auto;
  text-align: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 12rem;
  margin-bottom: 2rem;
  padding: 0.2rem;
`;

export const SetOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OneSet = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const OsName = styled.div`
  width: 10rem;
`;

export const OsInput = styled.input`
  //
`;

export const SaveButtonBox = styled.div`
  border-top: 1px solid black;
  width: 25rem;
  padding: 1rem;
  padding-top: 2rem;
`;

export const SaveButton = styled.button`
  width: 8rem;
  height: 3rem;
  font-size: 1.2rem;
  display: block;
  margin: auto;
  background-color: transparent;
  border: 1px solid black;
`;
