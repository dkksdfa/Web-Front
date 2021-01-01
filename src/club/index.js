import React from "react";
import RenderClub from "./RenderClub";
import CLUB_LIST from "../data/club-list.json";

const Club = ({ match }) => {
  const clubs = CLUB_LIST[match.params.category];
  const category = match.params.category;
  return <RenderClub clubs={clubs} category={category} />;
};

export default Club;
