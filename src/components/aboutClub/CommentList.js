import { firestore } from "../../firebase";
import React, { useCallback, useEffect, useState } from "react";

const CommentList = ({ clublink }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const dbComments = await firestore
        .collection("comments")
        .where("club", "==", clublink)
        .orderBy("date", "asc")
        .get();
      let newComments = [];
      dbComments.forEach(async (comment) => {
        // const dbUser = await firestore
        //   .collection("additional userinfo")
        //   .doc(comment.data().creatorId)
        //   .get();
        // const creatorName = dbUser.data().name;
        newComments.push({ ...comment.data() /* creatorName*/ });
      });
      setComments(newComments);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {loading
        ? "Loading"
        : comments !== [] && (
            <div>
              <ul>
                {comments.map((val, i) => {
                  console.log({ val });
                  return <li key={i}>{val.content}</li>;
                })}
              </ul>
            </div>
          )}
    </>
  );
};

export default CommentList;
