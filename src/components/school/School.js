import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import Content from "./Content";
import { firestore } from "../../firebase";
import PageWrap from "../PageWrap";
import { Justify, Template, WhatIsProblem } from "../../styles/StyledSchool";
const School = ({ userObj }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const Diagnosis = "https://hcs.eduro.go.kr/#/loginHome";
  const homePage = "http://daekyeong.sen.hs.kr/index.do";
  let [onlineClass, setOnlineClass] = React.useState(
    "https://hoc23.ebssw.kr/onlineClass/search/onlineClassSearchView.do?schulCcode=00304&schCssTyp=online_high"
  );
  React.useEffect(() => {
    const getHtml = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://daekyeong.sen.hs.kr/70633/subMenu.do`
        );
        const $ = cheerio.load(response.data);
        const $bodyList =
          $("td.today")[0].children[1] &&
          $("td.today")[0].children[1].children[1].children[1].attribs.onclick;

        if ($bodyList) {
          const rResult = $bodyList.replace(/[^0-9]/g, "");
          const sponse = await axios.get(
            `http://daekyeong.sen.hs.kr/dggb/module/mlsv/selectMlsvDetailPopup.do?mlsvId=${rResult}`
          );
          const op = cheerio.load(sponse.data);
          const $tableList = op("table tbody").children("tr")[3];
          const rawData = $tableList.children[3].children[0].data;
          const formattedList = rawData.slice(7, rawData.length - 6).split(",");
          setData(formattedList);
        } else {
          setData(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getHtml();
  }, []);
  React.useEffect(() => {
    const getUserinfo = async () => {
      if (userObj) {
        const userData = await firestore
          .collection("additional userinfo")
          .doc(userObj.uid)
          .get();
        setOnlineClass(
          `https://hoc23.ebssw.kr/20dk${userData.data().grade}${
            userData.data().classNumber
          }`
        );
      }
    };
    getUserinfo();
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
            link={onlineClass}
          />
        </WhatIsProblem>
        {data && <h2>오늘의 급식</h2>}
        {loading && <h2 style={{ fontSize: "1.5rem" }}>loading</h2>}
        {!loading && !data && (
          <h2 style={{ fontSize: "1.5rem" }}>
            오늘은 주말/공휴일이라 급식이 없습니다.
          </h2>
        )}
      </Template>
    </Justify>
  );
};
export default School;
