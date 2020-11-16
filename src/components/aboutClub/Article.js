import React, { useCallback, useContext, useEffect, useState } from "react";
import PageWrap from "../PageWrap";
// import {} from "../../styles/StyledArticle";
import { firestore } from "../../firebase";
import { Userinfo } from "../../App";
import { Link, useHistory } from "react-router-dom";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(null);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

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
      setEditText(realArticle.content);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [articleId]);
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
        <h1>loading...</h1>
      </PageWrap>
    );
  if (error) {
    return (
      <PageWrap>
        <h1>Error!</h1>
        <Link to="/">Go to home</Link>
      </PageWrap>
    );
  }
  return (
    <PageWrap>
      {!loading && done && (
        <>
          <h1>{article.title}</h1>
          <span>
            {Date(new Date(article.date.seconds * 1000)).toString()} |{" "}
            {article.creatorName} | count : {article.count}
          </span>
          {userObj && (
            <>
              {userObj.uid === article.creatorId && (
                <>
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
                      <button onClick={onDelete}>Delete</button>
                      <button onClick={onEditToggle}>Edit</button>
                    </>
                  )}
                </>
              )}
            </>
          )}
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
