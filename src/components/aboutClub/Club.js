import React, { useState } from "react";

// import { sortFunction } from "../../library/functions.js";
import RenderClub from "./RenderClub";
import { clublist } from "../index";
import { Link } from "react-router-dom";
const Club = ({ match }) => {
  const clubs = clublist[match.params.category];
  const [loading, setLoading] = useState(false);
  const category = match.params.category;

  return <RenderClub loading={loading} clubs={clubs} category={category} />;
};

export default Club;
