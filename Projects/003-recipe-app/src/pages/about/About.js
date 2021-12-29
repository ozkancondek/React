import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>BlueBerry</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi I am Blueberry</h2>
        <h3>I am currently participating Fullstack bootcamp</h3>
        <h2>
          <a href="mailto:blueberry@clarusway.com">Contact with me</a>
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
