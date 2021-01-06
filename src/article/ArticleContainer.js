import React, { useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledPageTitle } from "../common/styles";
import AddComment from "./AddComment";
import {
  ArticleContent,
  ArticleCreatorName,
  ArticleSubInfo,
  ArticleTitle,
  SubInfoDiv,
} from "./StyledArticle";

const ArticleContainer = ({
  loading,
  error,
  article,
  isOwner,
  onEdit,
  onDelete,
  setLoading,
}) => {
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

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  if (loading) return <StyledPageTitle>loading...</StyledPageTitle>;
  if (error)
    return (
      <>
        <StyledPageTitle>Error!</StyledPageTitle>
        <Link to="/">Go to home</Link>
      </>
    );

  return (
    <>
      <ArticleTitle>{article.title}</ArticleTitle>
      <SubInfoDiv>
        <ArticleCreatorName>{article.creatorName}</ArticleCreatorName>
        <ArticleSubInfo>{article.date.formmatedDate}</ArticleSubInfo>
        {isOwner && (
          <>
            <span className="subInfo">
              <BiEditAlt onClick={onEdit}></BiEditAlt>
            </span>
            <span className="subInfo">
              <BsTrash onClick={onDelete}>Delete</BsTrash>
            </span>
          </>
        )}
      </SubInfoDiv>
      {isOwner && <ArticleContent>{article.content}</ArticleContent>}
    </>
  );
};

export default ArticleContainer;
