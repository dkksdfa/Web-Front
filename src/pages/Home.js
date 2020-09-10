import React from "react";
import { Link } from "react-router-dom";
import {
  Background,
  Button,
  Text,
  Today,
  ClubIntro,
  ClubWrap,
  MainBanner,
  TodayTitle,
} from "../styles/StyledHome";

const ClubExample = [
  { name: "웹프론트반", link: "webfront" },
  { name: "너튜브크리에이터반", link: "youtubecreator" },
  { name: "마인드스톰EV3코딩반", link: "ev3" },
  { name: "슈즈디자인반", link: "shoes" },
  { name: "젤예쁜손", link: "jell" },
];
const Main = () => {
  return (
    <>
      <Background>
        <MainBanner>
          <Text size="5" margin={true}>
            2020 대경 매봉제
          </Text>
          <Text size="2" margin={false}>
            2020. 09. 25
          </Text>
          <Text size="3" margin={false}>
            Made By WebFront
          </Text>
          <Link to="/Community/webfront">
            <Button>제작 과정 보러가기</Button>
          </Link>
        </MainBanner>
        <Today>
          <TodayTitle>Today's Top Communities</TodayTitle>
          <ClubWrap>
            {ClubExample.map((value, index) => {
              return (
                <Link to={`/community/${value.link}`}>
                  <ClubIntro key={index}>{value.name}</ClubIntro>
                </Link>
              );
            })}
          </ClubWrap>
        </Today>
      </Background>
    </>
  );
};

export default Main;
