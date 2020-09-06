import React from "react";
import values from "../values.js";
import styled from "styled-components";
import "../css/Nav.css";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
const Navigation = styled.nav`
  display: flex;
  /* position: fixed; */
  height: 44px;
  background: black;
  width: 100%;

  @media all and (max-width: 1300px) {
    & * {
      display: none;
    }
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  /* visibility: ${(props) => (props.visible ? "visible" : "hidden")}; */
  background: inherit;
  box-shadow: none;
  overflow: visible;
  margin: 0;
  padding: 0;
  width: 10%;
  height: 100%;
  background: none;
  color: rgb(204, 204, 204);
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.3s ease;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  /* position: fixed; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: black;
`;

const Nav = ({ main }) => {
  return (
    <Navigation>
      <ButtonPosition>
        {/* <Link to="/">
          <Image src={logo} alt="Logo" />
        </Link> */}
        <Button>
          <Link to="/">Home</Link>
        </Button>
        {values.menuList.map((value, index) => (
          <Button key={index} /*visible={main}*/>
            <Link to={"/" + value.link}>{value.name}</Link>
          </Button>
        ))}
        <Button /*visible={true}*/>Sign in</Button>
        <Button /*visible={true}*/>Join</Button>
      </ButtonPosition>
    </Navigation>
  );
};

export default Nav;
