import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../firebase";

const AddComment = ({ userObj, clublink, category, isLoggedIn, articleId }) => {
  const [newComment, setNewComment] = useState("");
  const onChange = (e) => {
    setNewComment(e.target.value);
  };
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please Login.");
      history.push("/login");
      return;
    }
    const newCommentObject = {
      content: newComment,
      date: new Date(),
      creatorId: userObj.uid,
      commentId: uuidv4(),
      club: clublink,
      category,
      articleId,
    };
    setNewComment("");
    try {
      if (newComment)
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
        <input
          placeholder="Enter new comment here..."
          onChange={onChange}
          value={newComment}
        />
        <input type="submit" value="add comment" />
      </form>
    </>
  );
};

export default AddComment;
