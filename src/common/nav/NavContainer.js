import React from "react";
import { NavWrapper } from "./StyledNav";
import NavItem from "./NavItem";

const NavContainer = ({ itemList }) => (
  <NavWrapper>
    {itemList.map((item, index) => (
      <NavItem key={index} item={item} />
    ))}
  </NavWrapper>
);

export default NavContainer;
