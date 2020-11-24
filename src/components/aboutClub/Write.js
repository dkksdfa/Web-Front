import PageWrap from "../PageWrap";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Write.css";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../../firebase";
import { Userinfo } from "../../App";
import { useHistory } from "react-router-dom";
import { Button } from "../../styles/StyledPageWrap";
import { LoginDiv } from "../../styles/StyledLogin";

const Write = ({ match }) => {
  // console.error("제목, 내용 길게 입력 시 여러 줄로 표시되게 구현해야함.");
  const { clublink, category } = match.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);
  const userinfo = React.useContext(Userinfo);
  const history = useHistory();
  const enc = new TextEncoder(); // always utf-8
  if (!("TextEncoder" in window))
    alert("Sorry, this browser does not support TextEncoder...");

  useEffect(() => {
    if (!titleRef.current) return;
    console.log(titleRef);
    titleRef.current.style.height = "1px";
    const newRows = Math.floor(titleRef.current.scrollHeight / 80);
    titleRef.current.style.height = "auto";
    titleRef.current.rows = newRows;
  });

  const onSubmit = async () => {
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
      return;
    }
    if (enc.encode(title).length > 128) {
      alert("title is too long (maximun is 128 characters)");
    }
    if (title === "") {
      alert("title is empty (put something)");
    } else if (content === "") {
      alert("content is empty (put something to content)");
    } else {
      const uid = userinfo.userObj.uid;
      const newObj = {
        title,
        content,
        count: 0,
        articleId: uuidv4(),
        date: new Date(),
        creatorId: uid,
        club: clublink,
      };
      await firestore.collection("articles").doc(newObj.articleId).set(newObj);
      history.push(`/club/${match.params.category}/${match.params.clublink}`);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") setContent(value);
    if (name === "image") {
    }
  };
  const onCancel = () => {
    history.push(`/club/${category}/${clublink}`);
  };
  return (
    <PageWrap>
      <div id="container">
        <div className="category">
          {category}/{clublink}'s new article
        </div>
        <div>
          <textarea
            id="title"
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            onChange={onChange}
            ref={titleRef}
            rows="1"
            className="articleTitle"
            placeholder="New article title here..."
          />
        </div>
        <input
          type="text"
          value={content}
          autoComplete="off"
          name="content"
          className="articleContent"
          onChange={onChange}
          placeholder="Write your article content here..."
        />
        <LoginDiv>
          <Button
            onClick={onSubmit}
            style={{ marginRight: "10px", background: "blue" }}
          >
            등록
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </LoginDiv>
      </div>
    </PageWrap>
  );
};

export default Write;
