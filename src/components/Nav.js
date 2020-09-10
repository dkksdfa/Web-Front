import React from "react";
import values from "../values.js";
import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
// import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ main }) => {
  return (
    <Navigation>
      <ButtonPosition>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        {values.menuList.map((value, index) => (
          <Button key={index}>
            <Link to={"/r/" + value.link}>{value.name}</Link>
          </Button>
        ))}
        <Button>
          <Link to="/Signin">Sign in</Link>
        </Button>
        <Button>
          <Link to="/Join">Join</Link>
        </Button>
      </ButtonPosition>
    </Navigation>
  );
};

export default Nav;
