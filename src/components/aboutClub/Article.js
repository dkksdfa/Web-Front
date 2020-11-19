import React, { useCallback, useContext, useEffect, useState } from "react";
import PageWrap from "../PageWrap";
// import {  } from "../../styles/StyledArticle";
import "../../styles/Article.css";
import { firestore } from "../../firebase";
import { Userinfo } from "../../App";
import { Link, useHistory } from "react-router-dom";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(null);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [date, setDate] = useState(null);

  const {
    params: { category, articleId, clublink },
  } = match;
  const { userObj, isLoggedIn } = useContext(Userinfo);
  const history = useHistory();
  const getArticle = useCallback(async () => {
    setLoading(true);
    const rawData = await firestore.collection("articles").doc(articleId).get();
    const realArticle = rawData.data();
    if (realArticle) {
      const dbUser = await firestore
        .collection("additional userinfo")
        .doc(realArticle.creatorId)
        .get();
      const creatorName = dbUser.data().name;
      setArticle({ ...realArticle, creatorName });
      const articleDate = new Date(realArticle.date.seconds * 1000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      setDate({
        formmatedDate: `${
          months[articleDate.getMonth()]
        } ${articleDate.getDate()}, ${articleDate.getFullYear()}`,
        originaldate: Date(
          `${articleDate.getFullYear()}-${
            articleDate.getMonth() - 1
          }-${articleDate.getDate()} ${articleDate.getHours()}:${articleDate.getMinutes()}:${articleDate.getSeconds()}`
        ),
      });

      setEditText(realArticle.content);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [articleId]);
  const onDelete = async () => {
    const lastCheck = window.confirm("Are you sure to delete this article?");
    if (lastCheck) {
      await firestore.collection("articles").doc(article.articleId).delete();
      history.push(`/club/${category}/${clublink}`);
    }
  };
  const onEditToggle = () => {
    setEdit((prev) => !prev);
  };
  const submitChange = async (e) => {
    e.preventDefault();
    await firestore
      .doc(`articles/${article.articleId}`)
      .update({ content: editText });
    setEdit(false);
    setArticle((prev) => ({ ...prev, content: editText }));
  };
  const onEditValueChange = (e) => {
    setEditText(e.target.value);
  };
  useEffect(() => {
    getArticle();
  }, [getArticle]);

  if (loading)
    return (
      <PageWrap>
        <h1 className="title">loading...</h1>
      </PageWrap>
    );
  if (error) {
    return (
      <PageWrap>
        <h1 className="title">Error!</h1>
        <Link to="/">Go to home</Link>
      </PageWrap>
    );
  }
  return (
    <PageWrap>
      {!loading && done && (
        <>
          <h1 className="title">{article.title}</h1>
          <div className="subInfoTemplate">
            <span className="creator">{article.creatorName}</span>
            <span className="subInfo">{date.formmatedDate}</span>
            {userObj && userObj.uid === article.creatorId && (
              <>
                <span className="subInfo">
                  <BiEditAlt onClick={onEditToggle}></BiEditAlt>
                </span>
                <span className="subInfo">
                  <BsTrash onClick={onDelete}>Delete</BsTrash>
                </span>
              </>
            )}
          </div>
          {userObj &&
            userObj.uid === article.creatorId &&
            (edit ? (
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
                <div id="content">{article.content}</div>
              </>
            ))}
          <AddComment
            userObj={userObj}
            clublink={clublink}
            category={category}
            isLoggedIn={isLoggedIn}
            articleId={articleId}
          />
        </>
      )}
      <CommentList
        clublink={clublink}
        setDone={setDone}
        articleId={articleId}
      />
    </PageWrap>
  );
};

export default Article;
