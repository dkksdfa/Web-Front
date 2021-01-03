import { Link } from "react-router-dom";
import styled from "styled-components";
import commonConstants from "../constants.json";
import constants from "./constants.json";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background: ${constants.NAV_WRAPPER_BACKGROUND_COLOR};
  width: ${constants.NAV_WRAPPER_WIDTH};
  height: ${commonConstants.NAV_HEIGHT};
  margin: 0;
  padding: 0;
  @media all and (max-width: 1300px) {
    & * {
      display: none;
    }
    // Add the code here for a mobile user
  }
`;

export const Item = styled.button`
  width: ${constants.ITEM_WIDTH};
  height: ${constants.ITEM_HEIGHT};
  background: none;
  color: ${constants.ITEM_COLOR};
  font-size: ${constants.ITEM_FONT_SIZE};
  border: none;
  cursor: pointer;
  &:hover {
    color: ${constants.ITEM_HOVER_COLOR};
    transition: ${constants.ITEM_TRANSITION_TIME} ease;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: unset;
`;
