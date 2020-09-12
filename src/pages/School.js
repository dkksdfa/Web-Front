import React from "react";
import axios from "axios";
import cheerio from "cheerio";
import {
  Background,
  Today,
  MainBanner,
  Container,
  Wrap,
  Box,
  ImageTemplate,
  Img,
} from "../styles/StyledSchool";
const School = () => {
  const [data, setData] = React.useState(null);
  const login = true;
  const Diagnosis = "https://hcs.eduro.go.kr/#/loginHome";
  const schedule = "";
  const OnlineClass = "https://hoc23.ebssw.kr/";

  React.useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2020, 8, 9);
    const secondDate = new Date();
    secondDate.setMinutes(0);
    secondDate.setHours(0);
    secondDate.setSeconds(0);
    const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));
    const mlsvId = 1409338 + diffDays;

    const getHtml = async () => {
      try {
        const response = await axios.get(
          `http://daekyeong.sen.hs.kr/dggb/module/mlsv/selectMlsvDetailPopup.do?mlsvId=${mlsvId}`
        );
        const $ = cheerio.load(response.data);
        const $bodyList = $("table tbody").children("tr")[3];
        const rawData = $bodyList.children[3].children[0].data;
        const result = rawData.slice(7, rawData.length - 6).split(",");
        setData(result);
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    getHtml();
  }, []);

  return (
    <Background>
      <Wrap>
        <MainBanner>
          <Container>
            <Box>
              <ImageTemplate>
                <Img src={process.env.PUBLIC_URL + "/image/school.jpg"}></Img>
              </ImageTemplate>
              <a href={Diagnosis} target="_blank">
                <div>학교홈페이지</div>
              </a>
            </Box>
            <Box>
              <ImageTemplate>
                <Img
                  src={process.env.PUBLIC_URL + "/image/Diagnosis.jpg"}
                ></Img>
              </ImageTemplate>
              <a href={schedule} target="_blank">
                <div>자가진단</div>
              </a>
            </Box>
            <Box>
              <ImageTemplate>
                <Img src={process.env.PUBLIC_URL + "/image/online.png"}></Img>
              </ImageTemplate>
              <a href={OnlineClass} target="_blank">
                <div>온라인 클래스</div>
              </a>
            </Box>
          </Container>
        </MainBanner>

        <Today>
          {!data ? (
            <h2>loading</h2>
          ) : (
            data.map((val, index) => <h2 key={index}>{val}</h2>)
          )}
        </Today>
      </Wrap>
    </Background>
  );
};
export default School;
