import { firestore } from "../../firebase";
import React, { useCallback, useEffect, useState } from "react";
import Comment from "./Comment";

const CommentList = ({ clublink }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  // const [names, setNames] = useState([]);
  const fetchData = async () => {
    setLoading(true);

    // let newNames = [];

    const dbComments = await firestore
      .collection("comments")
      .where("club", "==", clublink)
      .orderBy("date", "desc")
      .get();
    dbComments.forEach(async (comment) => {
      // result.push(comment.data());
      setComments((prev) => prev.concat(comment.data()));
    });

    // setComments()
    // setNames(newNames);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading
        ? "Loading"
        : comments !== [] && (
            <div>
              {comments.map((val, i) => {
                console.log("dddddddd");
                return <Comment comment={val} key={i}></Comment>;
              })}
            </div>
          )}
    </>
  );
};

export default CommentList;
