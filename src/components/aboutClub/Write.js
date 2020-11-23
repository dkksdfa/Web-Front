import PageWrap from "../PageWrap";
import React, { useState } from "react";
import "../../styles/Write.css";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../../firebase";
import { Userinfo } from "../../App";
import { useHistory } from "react-router-dom";

const Write = ({ match }) => {
  const { clublink, category } = match.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isRegisterd, setRegisterd] = useState(false);
  // const [image, setImage] = useState([]);

  // const count = 0;
  const userinfo = React.useContext(Userinfo);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
    } else {
      if (!isRegisterd) {
        setRegisterd(true);
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
        await firestore
          .collection("articles")
          .doc(newObj.articleId)
          .set(newObj);
        history.push(`/club/${match.params.category}/${match.params.clublink}`);
      }
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
            className="articleTitle"
            placeholder="New article title here..."
          />
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={content}
            autoComplete="off"
            name="content"
            className="articleContent"
            onChange={onChange}
            placeholder="Write your article content here..."
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
