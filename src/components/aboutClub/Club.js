import React, { useState } from "react";
import { firestore } from "../../firebase";
import { sortFunction } from "../../library/functions.js";
import RenderClub from "./RenderClub";
import { clublist } from "../index";
import { Link } from "react-router-dom";
const Club = ({ match }) => {
  const clubs = clublist[match.params.category];
  console.log(clubs);

  const [loading, setLoading] = useState(false);
  const category = match.params.category;

  // return <RenderClub loading={loading} clubs={clubs} category={category} />;
  return (
    <>
      {clubs.map((club, index) => (
        <Link to={`/club/${category}/${club}`} key={index}>
          <div>{club}</div>
        </Link>
      ))}
    </>
  );
};

export default Club;
