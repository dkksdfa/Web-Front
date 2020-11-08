import React from "react";
import { Link } from "react-router-dom";
import { Button, Text, MainBanner } from "../../styles/StyledHome";
const TopOfHome = () => {
  return (
    <MainBanner>
      <Text size="5">2020 대경 매봉제</Text>
      <Text size="2">2020. 09. 25</Text>
      <Text size="3">Made By WebFront</Text>
      <Link to="/Community/webfront">
        <Button>제작 과정 보러가기</Button>
      </Link>
    </MainBanner>
  );
};

export default TopOfHome;
