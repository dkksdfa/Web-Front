import React from "react";
import values from "../values.js";
import { Link } from "react-router-dom";
import PageWrap from "./PageWrap";

import { Title, ClubWrap, ClubIntro } from "../styles/StyledClub";
const Clubs = ({ match }) => {
  let result = values.clubs[match.params.id];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrap>
      <Title>{match.params.id} Club List</Title>
      <ClubWrap>
        {result ? (
          result.map((value, index) => {
            return (
              <Link to={`/community/${value.link}`}>
                <ClubIntro key={index}>{value.name}</ClubIntro>
              </Link>
            );
          })
        ) : (
          <h1>hello</h1>
        )}
      </ClubWrap>
    </PageWrap>
  );
};

export default Clubs;
