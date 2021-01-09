import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../firebase";

const Comment = ({
  comment,
  users,
  setUsers,
  isOwner,
  editing,
  setEditing,
}) => {
  console.log(comment);
  console.log(isOwner);
  console.log(editing);
  console.log(setEditing);
  console.log("---------------");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const [editText, setEditText] = useState(comment.content);
  const [edit, setEdit] = useState(false);
  const fetchData = useCallback(async () => {
    setLoading(true);
    const dbUser = await firestore
      .collection("additional userinfo")
      .doc(comment.creatorId)
      .get();
    setUsername(dbUser.data().name);
    setLoading(false);
    setUsers(users.concat(comment.creatorId));
  }, [comment, setUsers, users]);

  useEffect(() => {
    if (users.includes(comment.creatorId)) return;
    fetchData();
  }, [fetchData, users, comment]);
  const onDelete = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await firestore.collection("comments").doc(comment.id).delete();
    }
  };
  // const onEdit= async () => {
  //   setEdit
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
    await firestore
      .collection("comments")
      .doc(comment.id)
      .set({ content: editText }, { merge: true });
    setEdit(false);
    setEditing(false);
  };
  const onCancle = () => {
    setEdit(false);
    setEditText(comment.content);
    setEditing(false);
  };
  const onEditClick = () => {
    setEdit(true);
    setEditing(true);
  };
  if (edit) {
    return (
      <>
        <form onSubmit={onSubmit}>
          <input
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <input type="submit" value="edit" />
          <input type="button" value="Cancle" onClick={onCancle} />
        </form>
      </>
    );
  }
  return (
    <>
      {!loading && username && (
        <div>
          {comment.content} | {username} | {comment.category}/{comment.club}
          {isOwner && (
            <>
              <button onClick={onDelete}>delete</button>
              {!editing && <button onClick={onEditClick}>edit</button>}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Comment;
