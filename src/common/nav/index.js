import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Userinfo } from "../../App";
import { authService } from "../../firebase";
import NavContainer from "./NavContainer";
import constants from "./constants.json";
import commonConstants from "../constants.json";
import NavFunctions from "./NavFunctions";

const Nav = () => {
  const history = useHistory();
  const { isLoggedIn } = useContext(Userinfo);
  const getItemObj = useCallback(
    (title, link, onClick) => ({ title, link, onClick: onClick || undefined }),
    []
  );
  const itemList = [
    getItemObj(constants.HOME_TEXT, commonConstants.path.HOME_PATH),
    getItemObj(constants.SCHOOL_TEXT, commonConstants.path.SCHOOL_PATH),
    getItemObj(constants.SW_TEXT, `${commonConstants.path.CLUB_PATH}/SW`),
    getItemObj(constants.FOOD_TEXT, `${commonConstants.path.CLUB_PATH}/Food`),
    getItemObj(
      constants.FINANCE_TEXT,
      `${commonConstants.path.CLUB_PATH}/Finance`
    ),
    getItemObj(constants.OTHER_TEXT, `${commonConstants.path.CLUB_PATH}/Other`),
    isLoggedIn === true
      ? getItemObj(constants.MODIFY_TEXT, commonConstants.path.MODIFY_PATH)
      : getItemObj(constants.JOIN_TEXT, commonConstants.path.JOIN_PATH),
    isLoggedIn === true
      ? getItemObj(constants.LOGOUT_TEXT, "", () =>
          NavFunctions.logout(authService, history)
        )
      : getItemObj(constants.LOGIN_TEXT, commonConstants.path.LOGIN_PATH),
  ];

  return <NavContainer itemList={itemList} />;
};

export default Nav;
