import React from "react";
import {
  Today,
  ClubIntro,
  ClubWrap,
  TodayTitle,
} from "../../styles/StyledHome";
import { Link } from "react-router-dom";
const BottomOfHome = () => {
  const ClubExample = [
    { name: "웹프론트반", category: "SW", link: "webfront" },
    { name: "너튜브크리에이터반", category: "SW", link: "youtubecreator" },
    { name: "마인드스톰EV3코딩반", category: "SW", link: "ev3" },
    { name: "슈즈디자인반", category: "SW", link: "shoes" },
    { name: "젤예쁜손", category: "SW", link: "jell" },
  ];

  console.error(
    "Above club examples are 'example'. Thus replace it real top communities."
  );

  const clubs = ClubExample.map((value, index) => {
    return (
      <Link to={`/club/${value.category}/${value.link}`} key={index}>
        <ClubIntro>{value.name}</ClubIntro>
      </Link>
    );
  });
  return (
    <Today>
      <TodayTitle>Today's Top Communities</TodayTitle>
      <ClubWrap>{clubs}</ClubWrap>
    </Today>
  );
};

export default BottomOfHome;
