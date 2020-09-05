import React from "react";
import styled from "styled-components";
import values from "../values.js";
const Background = styled.div`
  width: 100%;
  height: 1100px;
  justify-content: center;
  background: url("image/background4.jpg");
  background-size: 100% auto;
  text-align: center;
`;

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 10px;
  color: pink;
  font-size: 2.5rem;
  margin-top: 1rem;
  padding: 0.2rem 1rem;
  &:hover {
    background: red;
    color: white;
    transition: 0.5s;
  }
`;
const Text = styled.p((props) => ({
  fontSize: `${props.size}rem`,
  color: "white",
  lineHeight: "1rem",
  fontWeight: "bold",
}));

const MenuTemplate = styled.div`
  width: 1100px;
  height: 200px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Rolling = styled.div`
  width: 100%;
  padding: 50px 0;
  background: url("image/background1.jpg");
  background-size: cover;
  background-position: 0 -150px;
`;

const Menu = styled.div`
  width: 200px;
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  margin-bottom: 25px;
  background: white;
  color: gray;
  font-size: 2rem;
  font-weight: bold;
  line-height: 150px;
  border-radius: 10px;
  &:hover {
    background: pink;
    color: white;
    transition: 0.4s ease;
    box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Main = () => {
  return (
    <>
      <Background>
        <Rolling>
          <Text size="5">2020 대경 매봉제</Text>
          <Text size="2">2020. 09. 25</Text>
          <Text size="3">Made By WebFront</Text>
          <Button>제작 과정 보러가기</Button>
        </Rolling>
        <MenuTemplate>
          {values.menuList.map((value, index) => (
            <Menu key={index}>{value}</Menu>
          ))}
        </MenuTemplate>
      </Background>
    </>
  );
};

export default Main;
