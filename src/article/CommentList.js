import React, { useContext, useState } from "react";
import Comment from "./Comment";
import { Userinfo } from "../App";

const CommentList = ({ comments }) => {
  const [users, setUsers] = useState([]);
  const userinfo = useContext(Userinfo);
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
            key={i}
          ></Comment>
        );
      })}
    </div>
  );
};

export default CommentList;
