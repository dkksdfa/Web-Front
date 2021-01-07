import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledPageTitle } from "../common/styles";
import {
  ArticleContent,
  ArticleCreatorName,
  ArticleSubInfo,
  ArticleTitle,
  SubInfoDiv,
} from "./StyledArticle";

const ArticleComponent = ({ isOwner, article, onEdit, onDelete }) => {
  console.log();
  if (article === null)
    return (
      <>
        <ArticleTitle>Article is empty.</ArticleTitle>
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
            <BiEditAlt onClick={onEdit}></BiEditAlt>
            <BsTrash onClick={onDelete}>Delete</BsTrash>
          </>
        )}
      </SubInfoDiv>
      <ArticleContent>{article.content}</ArticleContent>
    </>
  );
};

export default ArticleComponent;
