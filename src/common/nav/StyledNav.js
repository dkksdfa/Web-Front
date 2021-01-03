import { Link } from "react-router-dom";
import styled from "styled-components";
import commonConstants from "../constants.json";

export const Navigation = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  height: ${commonConstants.NAV_HEIGHT};
  background: black;
  width: 100%;
  @media all and (max-width: 1300px) {
    & * {
      display: none;
    }
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button`
  background: inherit;
  box-shadow: none;
  overflow: visible;
  margin: 0;
  padding: 0;
  width: 10%;
  height: 100%;
  background: none;
  color: rgb(204, 204, 204);
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.3s ease;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: unset;
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: black;
`;
