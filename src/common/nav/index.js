import React from "react";
import { ButtonPosition, NavButton, Navigation } from "./StyledNav";
import { Link, useHistory } from "react-router-dom";
import { Userinfo } from "../../App";
import { authService } from "../../firebase";

const Nav = () => {
  const history = useHistory();
  const menulist = (login) => [
    { title: "Home", link: "/" },
    { title: "School", link: "/School" },
    { title: "SW", link: "/clubs/SW" },
    { title: "Food", link: "/clubs/Food" },
    { title: "Finance", link: "/clubs/Finance" },
    { title: "Other", link: "/clubs/Other" },
    login === true
      ? {
          title: "Modify",
          link: "/Modify",
        }
      : { title: "Join", link: "/Join" },
  ];

  const onClick = () => {
    authService.signOut();
    history.go(0);
  };
  return (
    <Userinfo.Consumer>
      {({ isLoggedIn }) => (
        <Navigation>
          <ButtonPosition>
            {menulist(isLoggedIn).map((val, i) => (
              <NavButton key={i}>
                <Link
                  to={val.link}
                  style={{
                    color: "unset",
                  }}
                >
                  {val.title}
                </Link>
              </NavButton>
            ))}
            {isLoggedIn ? (
              <NavButton onClick={onClick}>Logout</NavButton>
            ) : (
              <NavButton>
                <Link to="/login">Login</Link>
              </NavButton>
            )}
          </ButtonPosition>
        </Navigation>
      )}
    </Userinfo.Consumer>
  );
};

export default Nav;
