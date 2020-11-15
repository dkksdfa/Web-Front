import { firestore } from "../../firebase";
import React, { useEffect, useState } from "react";
import RenderComment from "./RenderComment";

const CommentList = ({ clublink, setDone }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setDone(false);
    setComments([]);
    firestore
      .collection("comments")
      .where("club", "==", clublink)
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        const commentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentArray);
        setDone(true);
      });
  }, [setDone, clublink]);
  return (
    <div>
      {comments !== [] && (
        <div>
          {comments.map((val, i) => {
            return <RenderComment comment={val} key={i}></RenderComment>;
          })}
        </div>
      )}
    </div>
  );
};

export default CommentList;
