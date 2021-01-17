import React, { useState } from "react";
import { getTodayMeal } from "./school-function";
import PageWrap from "../common/page-wrap";
import ContentContainer from "./ContentContainer";
import MealComponent from "./MealComponent";

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
      <MealComponent loading={loading} meal={meal} />
    </PageWrap>
  );
};
export default School;
