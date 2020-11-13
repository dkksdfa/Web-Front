import { firestore } from "../../firebase";
import React, { useCallback, useEffect, useState } from "react";

const CommentList = ({ clublink }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const fetchData = useCallback(async () => {
    setLoading(true);

    const dbComments = await firestore
      .collection("comments")
      .where("club", "==", clublink)
      .orderBy("date", "asc")
      .get();
    let newComments = [];
    dbComments.forEach((comment) => {
      newComments.push(comment.data());
    });
    console.log({ newComments });
    setComments(newComments);
    setLoading(false);
  }, [clublink]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (loading) return "Loading...";
  if (!loading && !comments) return "";
  return (
    <div>
      <ul>
        {comments.map((val, i) => (
          <li key={i}>{val.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
