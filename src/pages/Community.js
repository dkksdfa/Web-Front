import React from "react";
import { Link } from "react-router-dom";
import values from "../values";
import ArticlePreview from "./ArticlePreview";
import { Body } from "../styles/StyledCommunity";
const Community = ({ match }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  const clubInfo = values.clubs[match.params.category].find(
    (club) => club.link === match.params.clubname
  );
  return (
    <Body>
      <Link to={`../Write/${match.params.category}`}>
        <button>글쓰기</button>
      </Link>
      <input type="text" placeholder="검색어 입력"></input>
      {clubInfo.articles.map((e) => {
        return (
          <ArticlePreview
            clubname={clubInfo.name}
            match={match}
            article={e}
            key={e.id}
          />
        );
      })}
    </Body>
  );
};
export default Community;
