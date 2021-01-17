import React from "react";
import { FeedText } from "./StyledSchool";
import constants from "./constants.json";
import commonConstants from "../common/constants.json";

const MealComponent = ({ loading, meal }) => {
  if (loading) return <FeedText>{commonConstants.LOADING_MESSAGE}</FeedText>;
  if (!loading && !meal) return <FeedText>{constants.NO_MEALS}</FeedText>;
  if (meal) return <FeedText style={{ fontSize: "3rem" }}>{constants.THE_MEALS}</FeedText>;
  return meal.map((val, index) => <FeedText key={index}>{val}</FeedText>);
};

export default MealComponent;
