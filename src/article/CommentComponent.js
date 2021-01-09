import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentComponent = ({
  userObj,
  comments,
  clublink,
  category,
  isLoggedIn,
  articleId,
  setError,
}) => {
  return (
    <>
      <AddComment
        userObj={userObj}
        clublink={clublink}
        category={category}
        isLoggedIn={isLoggedIn}
        articleId={articleId}
        setError={setError}
      />
      <CommentList
        comments={comments}
        clublink={clublink}
        articleId={articleId}
      />
    </>
  );
};

export default CommentComponent;
