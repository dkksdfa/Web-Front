import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledPageTitle } from "../common/styles";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
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
  isDone,
  article,
  date,
  userObj,
  onEdit,
  onDelete,
  clublink,
  category,
  isLoggedIn,
  articleId,
  setDone,
}) => {
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
      {isDone && (
        <>
          <ArticleTitle>{article.title}</ArticleTitle>
          <SubInfoDiv>
            <ArticleCreatorName>{article.creatorName}</ArticleCreatorName>
            <ArticleSubInfo>{date.formmatedDate}</ArticleSubInfo>
            {userObj && userObj.uid === article.creatorId && (
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
          {userObj && userObj.uid === article.creatorId && (
            <ArticleContent>{article.content}</ArticleContent>
          )}
          <AddComment
            userObj={userObj}
            clublink={clublink}
            category={category}
            isLoggedIn={isLoggedIn}
            articleId={articleId}
          />
        </>
      )}
      <CommentList
        clublink={clublink}
        setDone={setDone}
        articleId={articleId}
      />
    </>
  );
};

export default ArticleContainer;
