import React from "react";
import { Background } from "./StyledHome";
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
