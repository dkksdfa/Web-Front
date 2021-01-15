import React, { useState } from "react";
import { FeedText } from "./StyledSchool";
import { getTodayMeal } from "./school-function";
import PageWrap from "../common/page-wrap";
import constants from "./constants.json";
import ContentContainer from "./ContentContainer";

const School = ({ userObj }) => {
  const [meal, setMeal] = React.useState(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    getTodayMeal(setLoading, setMeal);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrap>
      <ContentContainer userObj={userObj} />
      {meal && <FeedText style={{ fontSize: "3rem" }}>{constants.THE_MEALS}</FeedText>}
      {loading && <FeedText>loading</FeedText>}
      {!loading && !meal && <FeedText>{constants.NO_MEALS}</FeedText>}
      {!loading && meal && meal.map((val, index) => <FeedText key={index}>{val}</FeedText>)}
    </PageWrap>
  );
};
export default School;
