import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentContainer = ({
  userObj,
  clublink,
  category,
  isLoggedIn,
  setDone,
  articleId,
}) => {
  return (
    <>
      <AddComment
        userObj={userObj}
        clublink={clublink}
        category={category}
        isLoggedIn={isLoggedIn}
        articleId={articleId}
      />
      <CommentList
        clublink={clublink}
        setDone={setDone}
        articleId={articleId}
      />
    </>
  );
};

export default CommentContainer;
