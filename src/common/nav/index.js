import React from "react";
import { ButtonPosition, NavButton, Navigation } from "./StyledNav";
import { Link, useHistory } from "react-router-dom";
import { Userinfo } from "../../App";
import { authService } from "../../firebase";
import constants from "../constants";
import NavContainer from "./NavContainer";

const Nav = () => {
  const history = useHistory();
  const {
    HOME_TEXT,
    SCHOOL_TEXT,
    SW_TEXT,
    FOOD_TEXT,
    FINANCE_TEXT,
    OTHER_TEXT,
    MODIFY_TEXT,
    JOIN_TEXT,
    LOGOUT_TEXT,
    LOGIN_TEXT,
  } = constants.NAV;

  const onLogoutButtonClick = () => {
    authService.signOut();
    history.go(0);
  };

  const itemList = (login) => [
    { title: HOME_TEXT, link: "/" },
    { title: SCHOOL_TEXT, link: "/School" },
    { title: SW_TEXT, link: "/clubs/SW" },
    { title: FOOD_TEXT, link: "/clubs/Food" },
    { title: FINANCE_TEXT, link: "/clubs/Finance" },
    { title: OTHER_TEXT, link: "/clubs/Other" },
    login === true
      ? { title: MODIFY_TEXT, link: "/Modify" }
      : { title: JOIN_TEXT, link: "/Join" },
    login === true
      ? { title: LOGOUT_TEXT, link: "", onClick: onLogoutButtonClick }
      : { title: LOGIN_TEXT, link: "/login" },
  ];

  return <NavContainer Userinfo={Userinfo} itemList={itemList} />;
};

export default Nav;
