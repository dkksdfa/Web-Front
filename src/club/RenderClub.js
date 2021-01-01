import React from "react";
import PageWrap from "../common/page-wrap";
import { Title, ClubWrap, ClubIntro } from "./StyledClub";
import { Link } from "react-router-dom";

const RenderClub = ({ clubs, category }) => {
  return (
    <PageWrap>
      <Title>{category} Club List</Title>
      <ClubWrap>
        {clubs.map((value, index) => {
          const clubLink = `/club/${category}/${value}`;
          return (
            <Link to={clubLink} key={index}>
              <ClubIntro key={index} image={`${category}/${value}`} />
            </Link>
          );
        })}
      </ClubWrap>
    </PageWrap>
  );
};

export default RenderClub;
