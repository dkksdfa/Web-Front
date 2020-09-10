import React from "react";
import values from "../values.js";
import { Link } from "react-router-dom";
import PageWrap from "./PageWrap";

import { Title, ClubWrap, ClubIntro } from "../styles/StyledClub";
const Club = ({ match }) => {
  let result = values.clubs[match.params.category];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrap>
      <Title>{match.params.category} Club List</Title>
      <ClubWrap>
        {result ? (
          result.map((value, index) => {
            return (
              <Link
                to={`/r/${match.params.category}/${value.link}`}
                key={index}
              >
                <ClubIntro key={index} image={value.image}>
                  {value.name}
                </ClubIntro>
              </Link>
            );
          })
        ) : (
          <h1>
            <Link to="/">This url is wrong. Click to go to home.</Link>
          </h1>
        )}
      </ClubWrap>
    </PageWrap>
  );
};

export default Club;
