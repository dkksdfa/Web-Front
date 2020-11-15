import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../../firebase";

const Comment = ({ comment }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  console.log({ comment });
  const fetchData = useCallback(async () => {
    setLoading(true);
    const dbUser = await firestore
      .collection("additional userinfo")
      .doc(comment.creatorId)
      .get();
    setUsername(dbUser.data().name);
    setLoading(false);
  }, [comment.creatorId]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      {!loading && username && (
        <div>
          {comment.content} | {username} | {comment.category}/{comment.club}
          <button>delete</button>
          <button>edit</button>
        </div>
      )}
    </>
  );
};

export default Comment;
