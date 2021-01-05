import React, { useCallback, useContext, useEffect, useState } from "react";
import PageWrap from "../common/page-wrap";
import { firestore } from "../firebase";
import { Userinfo } from "../App";
import { useHistory } from "react-router-dom";
import commonConstants from "../common/constants.json";
import ArticleContainer from "./ArticleContainer";

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
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
    const rawData = await firestore
      .collection(commonConstants.firebase.ARTICLE_COLLECTION_NAME)
      .doc(articleId)
      .get();
    const realArticle = rawData.data();
    if (realArticle) {
      const dbUser = await firestore
        .collection(commonConstants.firebase.USER_COLLECTION_NAME)
        .doc(realArticle.creatorId)
        .get();
      const creatorName = dbUser.data().displayName;
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
  const onEdit = () => {
    console.error("Make onEdit function");
  };

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <PageWrap>
      <ArticleContainer
        loading={loading}
        error={error}
        isDone={done}
        article={article}
        date={date}
        userObj={userObj}
        onEdit={onEdit}
        onDelete={onDelete}
        clublink={clublink}
        category={category}
        isLoggedIn={isLoggedIn}
        articleId={articleId}
        setDone={setDone}
      />
    </PageWrap>
  );
};

export default Article;
