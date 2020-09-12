import React from "react";
import { ButtonPosition, Button, Navigation } from "../styles/StyledNav";
// import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ main }) => {
  const menu = [
    { name: "School", link: "School" },
    { name: "SW", link: "r/SW" },
    { name: "Food", link: "r/Food" },
    { name: "Finance", link: "r/Finance" },
    { name: "Other", link: "r/Other" },
  ];
  return (
    <Navigation>
      <ButtonPosition>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        {menu.map((value, index) => (
          <Button key={index}>
            <Link to={"/" + value.link}>{value.name}</Link>
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
