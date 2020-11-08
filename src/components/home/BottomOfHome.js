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
    { name: "밴드반", category: "Other", link: "band" },
    { name: "골목식당반", category: "Food", link: "streetrestaurant" },
    { name: "슈즈디자인반", category: "SW", link: "shoesdesign" },
    { name: "언더라이팅반", category: "Finance", link: "underwriting" },
  ];

  const clubs = ClubExample.map((value, index) => {
    return (
      <Link to={`/club/${value.category}/${value.link}`} key={index}>
        <ClubIntro image={`${value.category}/${value.link}`} />
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
