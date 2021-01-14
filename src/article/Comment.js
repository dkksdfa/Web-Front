import React, { useCallback, useState } from "react";
import { firestore } from "../firebase";
import articleFuncs from "./article-functions";

const ArticleFunctions = new articleFuncs();

const Comment = ({ comment, isOwner }) => {
  // console.log(comment);
  const [commentText, setCommentText] = useState(comment.content);
  const [edit, setEdit] = useState(false);

  const onDelete = useCallback(
    async () =>
      window.confirm("Are you sure?") &&
      (await firestore.collection("comments").doc(comment.id).delete()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onEdit = useCallback(async () => {
    setEdit(false);
    await ArticleFunctions.editComment(comment.id, commentText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentText]);

  const onCancle = useCallback(() => {
    setEdit(false);
    setCommentText(comment.content);
  }, [comment.content]);

  const onEditClick = useCallback(() => setEdit(true), []);

  if (comment.creatorName === undefined) return null;
  return (
    <>
      <div>
        {edit ? (
          <input
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
          />
        ) : (
          <span>{commentText} </span>
        )}
        | {comment.creatorName} | {comment.category}/{comment.club}
        {edit && (
          <>
            <button onClick={onCancle}>Cancle</button>
            <button onClick={onEdit}>Apply</button>
          </>
        )}
        {!edit && isOwner && (
          <>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEditClick}>Edit</button>
          </>
        )}
      </div>
    </>
  );
};

export default Comment;
