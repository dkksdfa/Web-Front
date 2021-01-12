import React, { useCallback, useState } from "react";
import { firestore } from "../firebase";
import articleFuncs from "./article-functions";

const ArticleFunctions = new articleFuncs();

const Comment = ({ comment, isOwner, editing, setEditing }) => {
  const [editText, setEditText] = useState(comment.content);
  const [edit, setEdit] = useState(false);

  const onDelete = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await firestore.collection("comments").doc(comment.id).delete();
    }
  };
  // const onEdit= async () => {
  //   setEdit
  // };
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await ArticleFunctions.editComment(comment.id, comment.content);
      setEdit(false);
      setEditing(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comment.content]
  );

  const onCancle = useCallback(() => {
    setEdit(false);
    setEditText(comment.content);
    setEditing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment.content]);

  const onEditClick = useCallback(() => {
    setEdit(true);
    setEditing(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (comment.creatorName === undefined) return null;
  return (
    <>
      <div>
        {edit ? (
          <input
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
        ) : (
          <span>{comment.content} </span>
        )}
        | {comment.creatorName} | {comment.category}/{comment.club}
        {edit && (
          <form onSubmit={onSubmit}>
            <input type="submit" value="edit" />
            <input type="button" value="Cancle" onClick={onCancle} />
          </form>
        )}
        {!edit && isOwner && (
          <>
            <button onClick={onDelete}>delete</button>
            <button onClick={onEditClick}>edit</button>
          </>
        )}
      </div>
    </>
  );
};

export default Comment;
