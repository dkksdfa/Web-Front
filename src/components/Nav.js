import React from "react";
// import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
import { Link } from "react-router-dom";
import { Userinfo } from "./";
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

  const onClick = () => authService.signOut();
  return (
    <Userinfo.Consumer>
      {({ isLoggedIn }) => (
        <nav>
          <div>
            {menulist(isLoggedIn).map((val, i) => (
              <button key={i}>
                <Link
                  to={val.link}
                  style={{
                    color: "unset",
                  }}
                >
                  {val.title}
                </Link>
              </button>
            ))}
            {isLoggedIn ? (
              <button onClick={onClick}>Logout</button>
            ) : (
              <button>
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </nav>
      )}
    </Userinfo.Consumer>
  );
};

export default Nav;
