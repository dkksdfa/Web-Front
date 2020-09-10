import React from "react";
import {
  Body,
  Title,
  Writer,
  Inner,
  Info,
  Comment,
} from "../styles/StyledArticlePreview";
import { Link } from "react-router-dom";
const ArticlePreview = ({ clubname, match, article }) => {
  return (
    <Link
      to={`/r/${match.params.category}/${match.params.clubname}/${article.id}`}
    >
      <Body>
        <Inner>
          <Writer>{article.name}</Writer>
          <Info>
            • {clubname} {article.time}
          </Info>
          <Title>{article.title}</Title>
          <Comment>{article.comments.length} Comments</Comment>
        </Inner>
      </Body>
    </Link>
  );
};
export default ArticlePreview;
