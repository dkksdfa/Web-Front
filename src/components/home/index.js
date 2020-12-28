import React from "react";
import { Background } from "../../styles/StyledHome";
import Introduction from "./Introduction";
import TopCommunities from "./TopCommunites";

const Main = () => {
  return (
    <Background>
      <Introduction />
      <TopCommunities />
    </Background>
  );
};

export default Main;
