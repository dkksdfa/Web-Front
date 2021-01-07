import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ArticleFunctions from "./article-functions";
import ArticleComponent from "./ArticleComponent";

const articleFuncs = new ArticleFunctions();

const ArticleContainer = ({
  userObj,
  setLoading,
  setError,
  category,
  clublink,
  articleId,
}) => {
  const [article, setArticle] = useState(null);
  const history = useHistory();

  const getArticle = useCallback(async () => {
    const [article, error] = await articleFuncs.getArticle(articleId);
    if (error !== null) setError(true);
    else setArticle(article);
    setLoading(false);
  }, [articleId, setArticle, setError, setLoading]);

  const onDelete = useCallback(async () => {
    const error = articleFuncs.deleteArticle(articleId);
    if (error !== null) setError(true);
    else history.push(`/club/${category}/${clublink}`);
  }, [articleId, setError, category, clublink, history]);

  const onEdit = () => console.error("Make onEdit function");

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <ArticleComponent
      isOwner={userObj && article && userObj.uid === article.creatorId}
      article={article}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default ArticleContainer;
