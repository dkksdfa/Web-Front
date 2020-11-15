import { firestore } from "../../firebase";
import React, { useContext, useEffect, useState } from "react";
import RenderComment from "./RenderComment";
import { Userinfo } from "../../App";

const CommentList = ({ clublink, setDone }) => {
  const [comments, setComments] = useState([]);
  const userinfo = useContext(Userinfo);
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
            return (
              <RenderComment
                comment={val}
                isOwner={
                  userinfo.isLoggedIn && val.creatorId === userinfo.userObj.uid
                }
                key={i}
              ></RenderComment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CommentList;
