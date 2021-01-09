import React, { useContext, useEffect, useState } from "react";
import PageWrap from "../common/page-wrap";
import { Userinfo } from "../App";
import ArticleContainer from "./ArticleContainer";
import CommentContainer from "./CommentContainer";
import { StyledPageTitle } from "../common/styles";
import { Link } from "react-router-dom";
import ArticleFunctions from "./article-functions";

const articleFuncs = new ArticleFunctions();

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [articleLoading, setArticleLoading] = useState(true);
  const [error, setError] = useState({ error: false, message: "" });
  const [commentLoading, setCommentLoading] = useState(true);
  const {
    params: { category, articleId, clublink },
  } = match;
  const { userObj, isLoggedIn } = useContext(Userinfo);

  useEffect(() => {
    const asyncFunc = async () => {
      await articleFuncs.onArticleLoad(
        articleId,
        setError,
        setArticle,
        setArticleLoading
      );
      await articleFuncs.onCommentsLoad(
        setCommentLoading,
        setComments,
        articleId,
        setError
      );
    };
    asyncFunc();
  }, [articleId, setError, setArticle, setArticleLoading]);

  if (error.error) {
    console.error(`ERROR: ${error.message}`);
    return (
      <PageWrap>
        <StyledPageTitle>Error!!!</StyledPageTitle>
        <Link to="/">Going to home</Link>
      </PageWrap>
    );
  }

  if (articleLoading || commentLoading)
    return (
      <PageWrap>
        <StyledPageTitle>loading...</StyledPageTitle>
      </PageWrap>
    );

  return (
    <PageWrap>
      <ArticleContainer
        userObj={userObj}
        setError={setError}
        category={category}
        clublink={clublink}
        article={article}
        articleId={articleId}
      />
      <CommentContainer
        userObj={userObj}
        comments={comments}
        category={category}
        clublink={clublink}
        isLoggedIn={isLoggedIn}
        articleId={articleId}
        setError={setError}
      />
    </PageWrap>
  );
};

export default Article;
