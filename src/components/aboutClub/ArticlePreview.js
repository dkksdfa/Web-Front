import React from "react";
import { firebase, firestore } from "../../firebase";
import {
  Body,
  Title,
  Writer,
  Inner,
  Info,
  Comment,
} from "../../styles/StyledArticlePreview";

import { Link } from "react-router-dom";
import { Date } from "prismic-reactjs";

const ArticlePreview = ({ clublink, category, article, index, isOwner }) => {
  const onEditClick = () => {};
  const onDeleteClick = () => {
    const ok = window.confirm("정말로 이 글을 지우시겠습니까?");
    console.log(ok);
    if (ok) {
      firestore
        .collection("clubs")
        .doc(category)
        .get()
        .then((data) => {
          firebase.firestore.FieldValue.arrayRemove({ date: article.date });
        });
    }
  };

  // const dateString = Date(article.date).toString();
  console.log(new Date(article.date));
  // console.log(firebase.firestore.Timestamp.toDate(article.date));
  const articleLink = `/r/${category}/${clublink}/${index}`;
  return (
    <>
      <Link to={articleLink}>
        <Body>
          <Inner>
            <Writer>{article.name}</Writer>
            <Info>
              • {clublink} {/* dateString */}
            </Info>
            <Title>{article.title}</Title>
            <Comment>
              {Object.keys(article.comments).length || 0} Comments{" "}
            </Comment>
          </Inner>
        </Body>
      </Link>
      {isOwner && (
        <>
          <span onClick={onDeleteClick}>Delete</span>{" "}
          <span onClick={onEditClick}>Edit</span>
        </>
      )}
    </>
  );
};
export default ArticlePreview;
