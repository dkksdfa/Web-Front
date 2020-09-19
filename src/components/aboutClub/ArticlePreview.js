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
import { firestore } from "../../firebase";

const ArticlePreview = ({ clubname, match, article }) => {
  const articleLink = `/r/${match.params.category}/${match.params.clubname}/${article.title}`;
  return (
    <Link to={articleLink}>
      <Body>
        <Inner>
          <Writer>{article.writer}</Writer>
          <Info>
            {clubname} {article.date}
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
