import React from "react";
import styled from "styled-components";
import { spacing, typography, colors, breakpoints } from '../styles/tokens';
import ListComponent from "./ListComponent";
import backgroundImage from "../assets/timeline.jpg"; 

const TextImageSection = styled.section`
  width: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
`;

const TextImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  width: 50%; 
  height: 350px;
  background: url(${backgroundImage}) center/cover no-repeat;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 250px;
  }
`;

const TextSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; 
    padding: ${spacing.large};
  }
`;

const TextImageComponent = ({ headline, text, usps, backgroundColor, textColor, }) => {
  return (
    <TextImageSection backgroundColor={backgroundColor}>
      <TextImageContent>

        <ImageSection textColor={textColor}>

        </ImageSection>

        <TextSection>
          <h2>{headline}</h2>
          <p className="body-text-medium">{text}</p>
        </TextSection>
        
      </TextImageContent>
    </TextImageSection>
  );
};

export default TextImageComponent;

