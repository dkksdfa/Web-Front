import React from "react";
import CommentComponent from "./CommentComponent";

const CommentContainer = ({
  userObj,
  comments,
  category,
  clublink,
  isLoggedIn,
  articleId,
  setError,
}) => {
  return (
    <CommentComponent
      userObj={userObj}
      comments={comments}
      category={category}
      clublink={clublink}
      isLoggedIn={isLoggedIn}
      articleId={articleId}
      setError={setError}
    />
  );
};

export default CommentContainer;
