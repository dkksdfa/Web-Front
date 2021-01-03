import React from "react";
import { Item, StyledLink } from "./StyledNav";

const NavItem = ({ item }) => {
  const onClick = () => item.onClick && item.onClick();
  return (
    <Item>
      <StyledLink to={item.link} onClick={onClick}>
        {item.title}
      </StyledLink>
    </Item>
  );
};

export default NavItem;
