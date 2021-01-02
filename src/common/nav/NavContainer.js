import React from "react";
import { Link } from "react-router-dom";
import { ButtonPosition, NavButton, Navigation } from "./StyledNav";

const NavContainer = ({ Userinfo, itemList }) => {
  return (
    <Userinfo.Consumer>
      {({ isLoggedIn }) => (
        <Navigation>
          <ButtonPosition>
            {itemList(isLoggedIn).map((val, i) => (
              <NavButton key={i}>
                <Link
                  to={val.link}
                  style={{ color: "unset" }}
                  onClick={val.onClick || null}
                >
                  {val.title}
                </Link>
              </NavButton>
            ))}
          </ButtonPosition>
        </Navigation>
      )}
    </Userinfo.Consumer>
  );
};

export default NavContainer;
