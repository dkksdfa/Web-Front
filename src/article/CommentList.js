import { firestore } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import RenderComment from "./RenderComment";
import { Userinfo } from "../App";

const CommentList = ({ clublink, setDone, articleId }) => {
  const [comments, setComments] = useState([]);
  const [editing, setEditing] = useState(false);
  const userinfo = useContext(Userinfo);
  useEffect(() => {
    setDone(false);
    setComments([]);
    firestore
      .collection("comments")
      .where("articleId", "==", articleId)
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        const commentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentArray);
        setDone(true);
      });
  }, [setDone, articleId]);

  return (
    <div>
      {comments !== [] && (
        <div>
          {comments.map((val, i) => {
            // console.log(i, val);
            return (
              <RenderComment
                comment={val}
                isOwner={
                  userinfo.isLoggedIn &&
                  userinfo.userObj &&
                  val.creatorId === userinfo.userObj.uid
                }
                key={i}
                editing={editing}
                setEditing={setEditing}
              ></RenderComment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CommentList;
