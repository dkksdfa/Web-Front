import { firestore } from "../../firebase";
import React, { useCallback, useEffect, useState } from "react";

const CommentList = ({ clublink }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [names, setNames] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);

    let newNames = [];
    const getComments = async () => {
      const result = [];
      const dbComments = await firestore
        .collection("comments")
        .where("club", "==", clublink)
        .orderBy("date", "asc")
        .get();
      dbComments.forEach(async (comment) => {
        result.push(comment.data());
      });

      return result;
    };
    const getUserName = async (uid) => {
      const dbUser = await firestore
        .collection("additional userinfo")
        .doc(uid)
        .get();
      const creatorName = dbUser.data().name;
      return creatorName;
    };
    try {
      const dbComments = getComments();
      dbComments.forEach((val) => {
        const creatorName = getUserName(val.creatorId);
        newNames.push(creatorName);
      });
      setComments(dbComments);
    } catch (e) {
      setError(e);
    }
    setNames(newNames);
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
                  return (
                    <li key={i}>
                      {val.content} | {names[i]}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
    </>
  );
};

export default CommentList;
