import React from "react";
import PageWrap from "../PageWrap";
import { Title, ClubWrap, ClubIntro } from "../../styles/StyledClub";
import { Link } from "react-router-dom";

const RenderClub = ({ loading, category, clubs }) => {
  console.log({ clubs });
  if (loading)
    return (
      <PageWrap>
        <Title>Loading...</Title>
      </PageWrap>
    );
  else
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
