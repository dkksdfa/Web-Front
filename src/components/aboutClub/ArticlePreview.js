import React from "react";
import { firebase, firestore } from "../../firebase";
// import {
//   Body,
//   Title,
//   Writer,
//   Inner,
//   Info,
//   Comment,
// } from "../../styles/StyledArticlePreview";

import { Link } from "react-router-dom";
const ArticlePreview = ({ clublink, category, article, index, isOwner }) => {
  const onEditClick = () => {};
  const onDeleteClick = () => {
    const ok = window.confirm("정말로 이 글을 지우시겠습니까?");
    // console.log(ok);
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

  console.log({ isOwner });
  const articleLink = `/article/${category}/${clublink}/${article.articleId}`;
  return (
    <>
      <Link to={articleLink}>
        <div>
          <div>
            <div>{article.name}</div>
            <div>
              • {clublink} {/* dateString */}
            </div>
            <div>{article.title}</div>
            <div>{/*Object.keys(article.comments).length || 0*/} Comments </div>
          </div>
        </div>
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
