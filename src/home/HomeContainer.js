import React from "react";
import constants from "./constants.json";
import { HomeWrapper, Contents, HomeButton, HomeText } from "./StyledHome";

const HomeContainer = () => {
  const {
    TEXT1,
    TEXT2,
    TEXT3,
    TEXT1_SIZE,
    TEXT2_SIZE,
    TEXT3_SIZE,
    BUTTON_TEXT,
    VIDEO_URL,
  } = constants;

  return (
    <HomeWrapper>
      <Contents>
        <HomeText size={TEXT1_SIZE}>{TEXT1}</HomeText>
        <HomeText size={TEXT2_SIZE}>{TEXT2}</HomeText>
        <HomeText size={TEXT3_SIZE}>{TEXT3}</HomeText>
        <a target="_blank" rel="noopener noreferrer" href={VIDEO_URL}>
          <HomeButton>{BUTTON_TEXT}</HomeButton>
        </a>
      </Contents>
    </HomeWrapper>
  );
};

export default HomeContainer;
