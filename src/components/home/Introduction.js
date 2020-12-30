import React from "react";
import { IntroductionButton, Text, MainBanner } from "./StyledHome";
const Introduction = () => {
  return (
    <MainBanner>
      <Text size="5">2020 대경 매봉제</Text>
      <Text size="2">2020. 09. 25</Text>
      <Text size="3">Made By WebFront</Text>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtu.be/M6E-Ri4AGrY"
      >
        <IntroductionButton>소개 영상 보러가기</IntroductionButton>
      </a>
    </MainBanner>
  );
};

export default Introduction;
