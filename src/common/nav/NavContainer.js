import React from "react";
import { Navigation, ButtonPosition } from "./StyledNav";
import NavItem from "./NavItem";

const NavContainer = ({ itemList }) => (
  <Navigation>
    <ButtonPosition>
      {itemList.map((val, i) => (
        <NavItem key={i} item={val} />
      ))}
    </ButtonPosition>
  </Navigation>
);

export default NavContainer;
