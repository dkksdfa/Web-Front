import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../../firebase";

const AddComment = ({ userObj, clublink, category, isLoggedIn }) => {
  const [newComment, setNewComment] = useState("");
  const onChange = (e) => {
    setNewComment(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCommentObject = {
      content: newComment,
      date: new Date(),
      creatorId: userObj.uid,
      commentId: uuidv4(),
      club: clublink,
      category,
    };
    try {
      await firestore
        .collection("comments")
        .doc(newCommentObject.commentId)
        .set(newCommentObject);
    } catch (error) {
      throw error;
    }
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

export default AddComment;
