import React from "react";
import styled from "styled-components";
const Background = styled.div`
  width: 100%;
  height: 1100px;
  justify-content: center;
  padding-top: 100px;
  background: hotpink;
  text-align: center;
`;

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 10px;
  color: pink;
  font-size: 3rem;
  margin-top: 1rem;
  padding: 0 1rem;
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
  height: 400px;
  border-radius: 10px;
  background: white;
  border: none;
  margin: 100px auto 0;
`;

const Main = () => {
  return (
    <>
      <Background>
        <Text size="5">2020 대경 매봉제</Text>
        <Text size="2">2020. 09. 25</Text>
        <Text size="3">Made By WebFront</Text>
        <Button>제작 과정 보러가기</Button>
        <MenuTemplate>{}</MenuTemplate>
      </Background>
    </>
  );
};

export default Main;
