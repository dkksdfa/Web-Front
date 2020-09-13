import React from "react";
import PageWrap from "../PageWrap";
import { Title, ClubWrap, ClubIntro } from "../../styles/StyledClub";
import { Link } from "react-router-dom";

const RenderClub = ({ loading, category, clubs }) => {
  if (loading)
    return (
      <PageWrap>
        <h1>Loading...</h1>
      </PageWrap>
    );
  else
    return (
      <PageWrap>
        <Title>{category} Club List</Title>
        <ClubWrap>
          {clubs.map((value, index) => {
            const clubLink = `/club/${category}/${value.link}`;

            return (
              <Link to={clubLink} key={index}>
                <ClubIntro key={index} image={value.image}>
                  {value.data.name}
                </ClubIntro>
              </Link>
            );
          })}
        </ClubWrap>
      </PageWrap>
    );
};

export default RenderClub;
