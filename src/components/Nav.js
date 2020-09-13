import React, { Fragment } from "react";
import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
// import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages";
const Nav = ({ main }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const menu = [
    { name: "School", link: "School" },
    { name: "SW", link: "SW" },
    { name: "Food", link: "Food" },
    { name: "Finance", link: "Finance" },
    { name: "Other", link: "Other" },
  ];
  return (
    <Navigation>
      <ButtonPosition>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        {menu.map((value, index) => (
          <Button key={index}>
            <Link to={"/clubs/" + value.link}>{value.name}</Link>
          </Button>
        ))}
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          {isLoggedIn ? (
            <>
              <Button>Logout</Button>
              <Button>
                <Link to="/Modify">Modify</Link>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link to="/Login">Login</Link>
              </Button>
              <Button>
                <Link to="/Join">Join</Link>
              </Button>
            </>
          )}
        </AuthContext.Provider>
      </ButtonPosition>
    </Navigation>
  );
};

export default Nav;
