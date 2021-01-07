import React, { useContext, useState } from "react";
import PageWrap from "../common/page-wrap";
import { Userinfo } from "../App";
import ArticleContainer from "./ArticleContainer";
import CommentContainer from "./CommentContainer";
import { StyledPageTitle } from "../common/styles";
import { Link } from "react-router-dom";

const Article = ({ match }) => {
  const [articleLoading, setArticleLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const {
    params: { category, articleId, clublink },
  } = match;
  const { userObj, isLoggedIn } = useContext(Userinfo);

  if (!articleLoading && !commentLoading)
    return (
      <PageWrap>
        <StyledPageTitle>loading...</StyledPageTitle>
      </PageWrap>
    );
  if (error)
    return (
      <PageWrap>
        <StyledPageTitle>Error!</StyledPageTitle>
        <Link to="/">Go to home</Link>
      </PageWrap>
    );

  return (
    <PageWrap>
      <ArticleContainer
        userObj={userObj}
        setLoading={setArticleLoading}
        setError={setError}
        category={category}
        clublink={clublink}
        articleId={articleId}
      />
      <CommentContainer
        userObj={userObj}
        category={category}
        setError={setError}
        clublink={clublink}
        isLoggedIn={isLoggedIn}
        setDone={setCommentLoading}
        articleId={articleId}
      />
    </PageWrap>
  );
};

export default Article;
