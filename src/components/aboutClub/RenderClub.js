import React from "react";
import PageWrap from "../PageWrap";
// import { Title, ClubWrap, ClubIntro } from "../../styles/StyledClub";
import { Link } from "react-router-dom";

const RenderClub = ({ loading, category, clubs }) => {
  console.log({ clubs });
  if (loading)
    return (
      <PageWrap>
        <h1>Loading...</h1>
      </PageWrap>
    );
  else
    return (
      <PageWrap>
        <div>{category} Club List</div>
        <div>
          {clubs.map((value, index) => {
            const clubLink = `/club/${category}/${value.link}`;
            return (
              <Link to={clubLink} key={index}>
                {/* <ClubIntro key={index} image={value.link} /> */}
                <div key={index}>{value.link}</div>
              </Link>
            );
          })}
        </div>
      </PageWrap>
    );
};

export default RenderClub;
