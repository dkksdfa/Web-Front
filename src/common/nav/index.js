import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Userinfo } from "../../App";
import { authService } from "../../firebase";
import NavContainer from "./NavContainer";
import constants from "./constants.json";
import commonConstants from "../constants.json";

const Nav = () => {
  const history = useHistory();

  const onLogoutButtonClick = () => {
    authService.signOut();
    history.go(0);
  };

  const { isLoggedIn } = useContext(Userinfo);
  const itemList = [
    { title: constants.HOME_TEXT, link: commonConstants.HOME_PATH },
    { title: constants.SCHOOL_TEXT, link: commonConstants.SCHOOL_PATH },
    { title: constants.SW_TEXT, link: `${commonConstants.CLUB_PATH}/SW` },
    { title: constants.FOOD_TEXT, link: `${commonConstants.CLUB_PATH}/Food` },
    {
      title: constants.FINANCE_TEXT,
      link: `${commonConstants.CLUB_PATH}/Finance`,
    },
    { title: constants.OTHER_TEXT, link: `${commonConstants.CLUB_PATH}/Other` },
    isLoggedIn === true
      ? { title: constants.MODIFY_TEXT, link: commonConstants.MODIFY_PATH }
      : { title: constants.JOIN_TEXT, link: commonConstants.JOIN_PATH },
    isLoggedIn === true
      ? { title: constants.LOGOUT_TEXT, link: "", onClick: onLogoutButtonClick }
      : { title: constants.LOGIN_TEXT, link: commonConstants.LOGIN_PATH },
  ];
  return <NavContainer itemList={itemList} />;
};

export default Nav;
