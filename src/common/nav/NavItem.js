import React from "react";
import { NavButton, StyledLink } from "./StyledNav";

const NavItem = ({ item }) => {
  const onClick = () => item.onClick && item.onClick();
  return (
    <NavButton>
      <StyledLink to={item.link} onClick={onClick}>
        {item.title}
      </StyledLink>
    </NavButton>
  );
};

export default NavItem;
