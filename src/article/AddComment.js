import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import commonConstants from "../common/constants.json";
import CommonFunctions from "../common/functions";

const functions = new CommonFunctions();
const AddComment = ({
  userObj,
  clublink,
  category,
  isLoggedIn,
  articleId,
  setError,
}) => {
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
    const {
      firebase: { COMMENT },
    } = commonConstants;
    const error = functions.setDoc(
      COMMENT,
      newCommentObject.commentId,
      newCommentObject
    );
    if ((await error) !== null)
      setError({
        error: true,
        message: "There's a problem to add this comment.",
      });
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
