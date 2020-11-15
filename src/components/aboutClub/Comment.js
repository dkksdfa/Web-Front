import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../../firebase";

const Comment = ({ comment }) => {
  console.log({ comment });
  console.log("dd");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const fetchData = useCallback(async () => {
    setLoading(true);
    const dbUser = await firestore
      .collection("additional userinfo")
      .doc(comment.creatorId)
      .get();
    setUsername(dbUser.data().name);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!loading && username && (
        <div>
          {comment.content} | {username}
        </div>
      )}
    </>
  );
};

export default Comment;
