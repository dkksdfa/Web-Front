import React, { useState } from "react";

const Comment = ({ userObj }) => {
  const [newComment, setNewComment] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="Enter new comment here..." name="commentContent" />
        <input type="submit" value="add comment" />
      </form>
    </>
  );
};

export default Comment;
