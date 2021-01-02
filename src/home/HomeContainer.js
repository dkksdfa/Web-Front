import React from "react";
import constants from "../common/constants";
import { HomeWrapper, HomeButton, HomeText } from "./StyledHome";

const HomeContainer = () => {
  return (
    <HomeWrapper>
      <HomeText size={constants.HOME_TEXT1_SIZE}>
        {constants.HOME_TEXT1}
      </HomeText>
      <HomeText size={constants.HOME_TEXT2_SIZE}>
        {constants.HOME_TEXT2}
      </HomeText>
      <HomeText size={constants.HOME_TEXT3_SIZE}>
        {constants.HOME_TEXT3}
      </HomeText>
      <a target="_blank" rel="noopener noreferrer" href={constants.HOME_URL}>
        <HomeButton>{constants.HOME_BUTTON_TEXT}</HomeButton>
      </a>
    </HomeWrapper>
  );
};

export default HomeContainer;
