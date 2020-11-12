import { firestore } from "firebase";
import React, { useCallback, useEffect, useState } from "react";

const CommentList = ({ clublink }) => {
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async () => {
    setLoading(true);
    const comments = await firestore
      .collection("comments")
      .where("club", "==", clublink)
      .orderBy("date", "asc")
      .get();
    console.log({ comments });
    setLoading(false);
  }, [clublink]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return "hello";
};

export default CommentList;
