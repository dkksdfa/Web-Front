import React, { useContext, useState } from "react";
import Comment from "./Comment";
import { Userinfo } from "../App";

const CommentList = ({ comments, clublink, articleId }) => {
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState([]);
  const userinfo = useContext(Userinfo);

  console.log("comments:");
  console.log(comments);
  if (comments === null) return null;
  return (
    <div>
      {comments.map((val, i) => {
        return (
          <Comment
            comment={val}
            users={users}
            setUsers={setUsers}
            isOwner={
              userinfo.isLoggedIn &&
              userinfo.userObj &&
              val.creatorId === userinfo.userObj.uid
            }
            editing={editing}
            setEditing={setEditing}
            key={i}
          ></Comment>
        );
      })}
    </div>
  );
};

export default CommentList;
