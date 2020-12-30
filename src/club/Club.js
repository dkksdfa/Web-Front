import React from "react";
import RenderClub from "./RenderClub";
import { clublist } from "../components";

const Club = ({ match }) => {
  const clubs = clublist[match.params.category];
  const category = match.params.category;
  return <RenderClub clubs={clubs} category={category} />;
};

export default Club;
