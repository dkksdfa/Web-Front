import React from "react";
import PageWrap from "../PageWrap";
import {
  Title,
  ClubWrap,
  SWIntro,
  FoodIntro,
  FinanceIntro,
  OtherIntro,
} from "../../styles/StyledClub";
import { Link } from "react-router-dom";

const clubSwitch = (category, value, index) => {
  switch (category) {
    case "SW":
      return <SWIntro key={index}>{value.data.name}</SWIntro>;
      break;
    case "Finance":
      return <FinanceIntro key={index}>{value.data.name}</FinanceIntro>;
      break;
    case "Food":
      return (
        <FoodIntro key={index} /*image={value.image}*/>
          {value.data.name}
        </FoodIntro>
      );
      break;
    case "Other":
      return <OtherIntro key={index}>{value.data.name}</OtherIntro>;
  }
};
const RenderClub = ({ loading, category, clubs }) => {
  if (loading)
    return (
      <PageWrap>
        <h1>Loading...</h1>
      </PageWrap>
    );
  else
    return (
      <PageWrap>
        <Title>{category} Club List</Title>
        <ClubWrap>
          {clubs.map((value, index) => {
            const clubLink = `/club/${category}/${value.link}`;

            return (
              <Link to={clubLink} key={index}>
                {clubSwitch(category, value, index)}
              </Link>
            );
          })}
        </ClubWrap>
      </PageWrap>
    );
};

export default RenderClub;
