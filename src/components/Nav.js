import React from "react";
import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
import { Link } from "react-router-dom";
import { Userinfo } from "../App";
import { authService } from "../firebase";

const Nav = () => {
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
  };
  return (
    <Userinfo.Consumer>
      {({ isLoggedIn }) => (
        <Navigation>
          <ButtonPosition>
            {menulist(isLoggedIn).map((val, i) => (
              <Button key={i}>
                <Link
                  to={val.link}
                  style={{
                    color: "unset",
                  }}
                >
                  {val.title}
                </Link>
              </Button>
            ))}
            {isLoggedIn ? (
              <Button onClick={onClick}>
                <Link to="/">Logout</Link>
              </Button>
            ) : (
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </ButtonPosition>
        </Navigation>
      )}
    </Userinfo.Consumer>
  );
};

export default Nav;
