import React, { useContext, useEffect, useState } from "react";
import PageWrap from "../common/page-wrap";
import { Userinfo } from "../App";
import ArticleContainer from "./ArticleContainer";
import { StyledPageTitle } from "../common/styles";
import { Link } from "react-router-dom";
import ArticleFunctions from "./article-functions";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const articleFuncs = new ArticleFunctions();

const Article = ({ match }) => {
  // console.log("rerendering");
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [error, setError] = useState({ error: false, message: "" });
  const [cachedUid, setCachedUid] = useState([]);
  const [commentLoading, setCommentLoading] = useState(true);
  const {
    params: { category, articleId, clublink },
  } = match;
  const { userObj, isLoggedIn } = useContext(Userinfo);

  useEffect(() => {
    const asyncFunc = async () => {
      await articleFuncs.onArticleLoad(articleId, setError, setArticle, setArticleLoading);
      setCommentLoading(true);
      const [newComments, error] = await articleFuncs.onCommentsLoad(
        cachedUid,
        articleId,
        setCachedUid,
        setCommentLoading,
        setError
      );

      newComments !== [] && newComments !== null && setComments(newComments);
      if (error !== null || (await error) !== null) {
        console.error("ERROR: There's some problem to get comments.");
        setError(true);
      }
      setCommentLoading(false);
    };
    asyncFunc();
  }, [articleId, setError, setArticle, setArticleLoading, cachedUid]);

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
      <AddComment
        userObj={userObj}
        clublink={clublink}
        category={category}
        isLoggedIn={isLoggedIn}
        articleId={articleId}
        setError={setError}
      />
      <CommentList comments={comments} />
    </PageWrap>
  );
};

export default React.memo(Article);
