import React, { useState } from "react";

const Comment = ({ userObj }) => {
  const [newComment, setNewComment] = useState("");
  const onChange = (e) => {
    setNewComment(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      comment: newComment,
      date: new Date(),
      // creatorId: 여기,
    };
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="Enter new comment here..." onChange={onChange} />
        <input type="submit" value="add comment" />
      </form>
    </>
  );
};

export default Comment;
