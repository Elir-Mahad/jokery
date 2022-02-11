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
