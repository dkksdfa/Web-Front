import React, { useState } from "react";
import Content from "./Content";
import {
  FeedText,
  Justify,
  Template,
  WhatIsProblem,
} from "../../styles/StyledSchool";
import { getTodayMeal, getUserinfo } from "./school-function";
const School = ({ userObj }) => {
  const [meal, setMeal] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const Diagnosis = "https://hcs.eduro.go.kr/#/loginHome";
  const homePage = "http://daekyeong.sen.hs.kr/index.do";
  let [onlineClassURL, setOnlineClassURL] = React.useState(
    "https://hoc23.ebssw.kr/onlineClass/search/onlineClassSearchView.do?schulCcode=00304&schCssTyp=online_high"
  );
  React.useEffect(() => {
    getTodayMeal(setLoading, setMeal);
  }, []);
  React.useEffect(() => {
    getUserinfo(userObj, setOnlineClassURL);
  }, [userObj]);
  return (
    <Justify>
      <Template>
        <WhatIsProblem>
          <Content
            imagePath="/school.jpg"
            label="학교 홈페이지가기"
            link={homePage}
          />
          <Content
            imagePath="/Diagnosis.png"
            label="자가진단 하러가기"
            link={Diagnosis}
          />
          <Content
            imagePath="/online.png"
            label="온라인 클래스로"
            link={onlineClassURL}
          />
        </WhatIsProblem>
        {meal && <FeedText style={{ fontSize: "3rem" }}>오늘의 급식</FeedText>}
        {loading && <FeedText>loading</FeedText>}
        {!loading && !meal && <FeedText>오늘은 급식이 없습니다.</FeedText>}
        {!loading &&
          meal &&
          meal.map((val, index) => <FeedText key={index}>{val}</FeedText>)}
      </Template>
    </Justify>
  );
};
export default School;
