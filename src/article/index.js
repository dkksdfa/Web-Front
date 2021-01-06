import React, { useCallback, useContext, useEffect, useState } from "react";
import PageWrap from "../common/page-wrap";
import { Userinfo } from "../App";
import { useHistory } from "react-router-dom";
import ArticleContainer from "./ArticleContainer";
import CommentContainer from "./CommentContainer";
import ArticleFunctions from "./article-functions";

const articleFuncs = new ArticleFunctions();

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const {
    params: { category, articleId, clublink },
  } = match;
  const { userObj, isLoggedIn } = useContext(Userinfo);

  const history = useHistory();

  const getArticle = useCallback(async () => {
    setLoading(true);
    const [article, error] = await articleFuncs.getArticle(articleId);
    if (error !== null) setError(true);
    else setArticle(article);
    setLoading(false);
  }, [articleId]);

  const onDelete = async () => {
    const error = articleFuncs.deleteArticle(articleId);
    if (error !== null) setError(true);
    else history.push(`/club/${category}/${clublink}`);
  };

  const onEdit = () => console.error("Make onEdit function");

  return (
    <PageWrap>
      <ArticleContainer
        loading={loading}
        error={error}
        article={article}
        isOwner={userObj && article && userObj.uid === article.creatorId}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <CommentContainer
        userObj={userObj}
        category={category}
        clublink={clublink}
        isLoggedIn={isLoggedIn}
        setDone={setCommentLoading}
        articleId={articleId}
      />
    </PageWrap>
  );
};

export default Article;
