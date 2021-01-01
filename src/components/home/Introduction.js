import React from "react";
import {
  IntroductionButton,
  IntroductionText,
  IntroductionWrapper,
} from "./StyledHome";
const Introduction = () => {
  return (
    <IntroductionWrapper>
      <IntroductionText size="5">2020 대경 매봉제</IntroductionText>
      <IntroductionText size="2">2020. 09. 25</IntroductionText>
      <IntroductionText size="3">Made By WebFront</IntroductionText>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtu.be/M6E-Ri4AGrY"
      >
        <IntroductionButton>소개 영상 보러가기</IntroductionButton>
      </a>
    </IntroductionWrapper>
  );
};

export default Introduction;
