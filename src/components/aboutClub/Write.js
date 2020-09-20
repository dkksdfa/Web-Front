import PageWrap from "../PageWrap";
import React, { Component, useState } from "react";
import "../../styles/Write.css";
import { firestore, firebase } from "../../firebase";
import { Userinfo } from "..";
import { useHistory } from "react-router-dom";

const Write = ({ match }) => {
  const { clublink, category } = match.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const views = 0;
  const count = 0;

  const userinfo = React.useContext(Userinfo);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
    } else {
      const uid = userinfo.userObj.uid;
      const obj = await firestore
        .collection("additional userinfo")
        .doc(uid)
        .get()
        .then((doc) => doc.data().name)
        .then((name) => ({
          title,
          content,
          count: 0,
          views: 0,
          date: new Date(),
          comments: [],
          name,
          uid,
        }))
        .catch((error) => {
          throw error;
        });
      await firestore
        .collection("clubs")
        .doc(category)
        .update({
          [`${clublink}.articles`]: firebase.firestore.FieldValue.arrayUnion(
            obj
          ),
        });
      history.push(`/club/${match.params.category}/${match.params.clublink}`);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
    if (name === "image") {
      // do something
    }
  };
  return (
    <PageWrap>
      <div id="container">
        <div>{category}</div>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={content}
            name="content"
            onChange={onChange}
          />
          <div>
            <button type="submit">등록</button>
          </div>
        </form>
      </div>
    </PageWrap>
  );
};

export default Write;
