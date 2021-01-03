import styled from "styled-components";
import constants from "./constants.json";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  text-align: center;
  background: url(${constants.BACKGROUND_PATH}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Contents = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

// HomeText is a styled p tag that will
// be displayed in the center of the Home page.
// HomeText's text introduce what this site is.
export const HomeText = styled.p((props) => ({
  fontSize: `${props.size}`,
  color: constants.TEXT_COLOR,
  lineHeight: constants.TEXT_LINE_HEIGHT,
}));

export const HomeButton = styled.button`
  background: ${constants.BUTTON_BACKGROUND_COLOR};
  border: none;
  width: ${constants.BUTTON_WIDTH};
  height: ${constants.BUTTON_HEIGHT};
  cursor: pointer;
  border-radius: ${constants.BUTTON_BORDER_RADIUS};
  color: ${constants.BUTTON_TEXT_COLOR};
  font-size: ${constants.BUTTON_FONT_SIZE};
  margin-top: ${constants.BUTTON_MARGIN_TOP};
  font-weight: ${constants.BUTTON_FONT_WEIGHT};
  &:hover {
    background: ${constants.BUTTON_HOVER_BACKGROUND_COLOR};
    transition: ${constants.BUTTON_TRANSITION_TIME} ease;
  }
  &:focus {
    outline: none;
  }
`;
