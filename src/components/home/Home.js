import React from "react";
import { Background } from "../../styles/StyledHome";
import { default as Top } from "./TopOfHome";
import { default as Bottom } from "./BottomOfHome";

const Main = () => {
  return (
    <>
      <Background>
        <Top />
        <Bottom />
      </Background>
    </>
  );
};

export default Main;
