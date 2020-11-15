import React, { useCallback, useEffect, useState } from "react";

import { firestore } from "../../firebase";

const Comment = ({ comment, isOwner }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");

  console.log({ isOwner });
  const fetchData = useCallback(async () => {
    setLoading(true);
    const dbUser = await firestore
      .collection("additional userinfo")
      .doc(comment.creatorId)
      .get();
    setUsername(dbUser.data().name);
    setLoading(false);
  }, [comment]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const onDelete = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await firestore.collection("comments").doc(comment.id).delete();
    }
  };
  return (
    <>
      {!loading && username && (
        <div>
          {comment.content} | {username} | {comment.category}/{comment.club}
          {isOwner && (
            <>
              <button onClick={onDelete}>delete</button>
              <button>edit</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Comment;
