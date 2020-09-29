import React, { useContext, useEffect, useState } from "react";
import PageWrap from "../PageWrap";
// import {} from "../../styles/StyledArticle";
import { firestore } from "../../firebase";
import { Link, RichText, Date } from "prismic-reactjs";
import { Userinfo } from "../index";
import { load } from "cheerio";
import { useHistory } from "react-router-dom";
import { firebase } from "../../firebase";
import { isCompositeComponent } from "react-dom/test-utils";
const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentContent, setCommentContent] = useState("");
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const {
    params: { category, id, clublink },
  } = match;
  const { articleId } = match.params;
  const userinfo = useContext(Userinfo);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    const getArticle = async () => {
      const rawData = await firestore
        .collection("articles")
        .where("articleId", "==", articleId)
        .get();
      rawData.forEach((dbArticle) => {
        setArticle(dbArticle.data());
        setEditText(dbArticle.data().content);
      });
      setLoading(false);
    };
    getArticle();
  }, [category, clublink]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
    } else {
      const uid = userinfo.userObj.uid;
      try {
        const DBUserdata = await firestore
          .collection("additional userinfo")
          .doc(uid)
          .get()
          .catch((error) => {
            throw error;
          });
        const commentObj = {
          content: commentContent,
          count: 0,
          date: new Date(),
          name: DBUserdata.data().name,
          uid,
        };
        const rawData = await firestore.collection("clubs").doc(category).get();
        const articles = rawData.data()[clublink].articles;
        const DBarticleIndex = articles.length - 1 - id;
        const DBComments = await firestore
          .collection("clubs")
          .doc(category)
          .get();

        let JSONdata = JSON.parse(JSON.stringify(DBComments.data()));
        JSONdata[clublink].articles[DBarticleIndex].comments.unshift(
          commentObj
        );
        setCommentContent("");
        console.log(JSONdata);
        await firestore.collection("clubs").doc(category).set(JSONdata);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const commentChange = (e) => {
    setCommentContent(e.target.value);
  };
  const onDelete = async () => {
    const lastCheck = window.confirm(
      "Are you sure that you delete this article?"
    );
    if (lastCheck) {
      await firestore.collection("articles").doc(article.articleId).delete();
      history.push(`/club/${category}/${clublink}`);
    }
  };
  const onEditToggle = () => {
    setEdit((prev) => !prev);
  };

  const submitChange = (e) => {
    e.preventDefault();
  };
  const onEditValueChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <PageWrap>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>{article.title}</h1>
          <span>
            {Date(new Date(article.date.seconds * 1000)).toString()} | views :{" "}
            {article.views} | {article.creatorName} | count : {article.count}
          </span>
          {edit ? (
            <form onSubmit={submitChange}>
              <input
                value={editText}
                onChange={onEditValueChange}
                placeholder="Edit content"
              />
              <button onClick={onEditToggle}>Cancle</button>
              <input type="submit" value="Edit" />
            </form>
          ) : (
            <>
              <div>{article.content}</div>
              <button onClick={onEditToggle}>Edit</button>{" "}
              <button onClick={onDelete}>Delete</button>
            </>
          )}
          <form onSubmit={onSubmit}>
            <input
              placeholder="Enter new comment here..."
              value={commentContent}
              onChange={commentChange}
              name="commentContent"
            />
            <input type="submit" value="add comment" />
          </form>
        </>
      )}
    </PageWrap>
  );
};

export default Article;
