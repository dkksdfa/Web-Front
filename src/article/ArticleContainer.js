import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ArticleFunctions from "./article-functions";
import ArticleComponent from "./ArticleComponent";

const articleFuncs = new ArticleFunctions();

const ArticleContainer = ({
  userObj,
  setError,
  category,
  clublink,
  article,
  articleId,
}) => {
  const history = useHistory();

  const onDelete = useCallback(async () => {
    await articleFuncs.onDelete(
      articleId,
      setError,
      history,
      category,
      clublink
    );
  }, [articleId, setError, category, clublink, history]);

  const onEdit = () => console.error("Make onEdit function");

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
