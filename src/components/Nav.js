import React, { Fragment } from "react";
import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
// import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "./";
const Nav = ({ main }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  return (
    <Navigation>
      <ButtonPosition>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/School">School</Link>
        </Button>
        <Button>
          <Link to="/clubs/SW">SW</Link>
        </Button>
        <Button>
          <Link to="/clubs/Food">Food</Link>
        </Button>
        <Button>
          <Link to="/clubs/Finance">Finance</Link>
        </Button>
        <Button>
          <Link to="/clubs/Other">Other</Link>
        </Button>
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
