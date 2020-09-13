import React from "react";
import {
  Body,
  Title,
  Writer,
  Inner,
  Info,
  Comment,
} from "../../styles/StyledArticlePreview";
import { Link } from "react-router-dom";
const ArticlePreview = ({ clubname, match, article }) => {
  console.log(clubname, article);
  return (
    <Link
      to={`/r/${match.params.category}/${match.params.clubname}/${article.id}`}
    >
      <Body>
        <Inner>
          <Writer>{article.name}</Writer>
          <Info>
            • {clubname} {article.date}
          </Info>
          <Title>{article.title}</Title>
          <Comment>
            {/*Object.keys(article.comments).length || 0*/} Comments
          </Comment>
        </Inner>
      </Body>
    </Link>
  );
};
export default ArticlePreview;
