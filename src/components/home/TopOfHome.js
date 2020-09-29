import React from "react";
import { Link } from "react-router-dom";
// import { Button, Text, MainBanner } from "../../styles/StyledHome";
const TopOfHome = () => {
  return (
    <div>
      <div size="5">2020 대경 매봉제</div>
      <div size="2">2020. 09. 25</div>
      <div size="3">Made By WebFront</div>
      <Link to="/Community/webfront">
        <button>제작 과정 보러가기</button>
      </Link>
    </div>
  );
};

export default TopOfHome;
