import React, { useEffect, useState } from "react";
import PageWrap from "../PageWrap";
// import {} from "../../styles/StyledArticle";
import { firestore } from "../../firebase";
import { Link, RichText, Date } from "prismic-reactjs";

import { load } from "cheerio";
const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    params: { category, id, clublink },
  } = match;
  useEffect(() => {
    setLoading(true);
    const getArticle = async () => {
      console.log("hello");
      const rawData = await firestore.collection("clubs").doc(category).get();
      const articles = rawData.data()[clublink].articles;
      const DBarticle = articles[articles.length - 1 - id];
      const {
        views,
        name,
        uid,
        comments,
        title,
        content,
        count,
        date,
      } = DBarticle;

      setArticle({
        views,
        name,
        uid,
        comments,
        title,
        content,
        count,
        date: Date(new Date(date.seconds * 1000)).toString(),
      });
      setLoading(false);
    };
    getArticle();
  }, [category, clublink]);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <PageWrap>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>{article.title}</h1>
          <span>
            {article.date} | views : {article.views} | {article.name} | count :{" "}
            {article.count}
          </span>
          <div>{article.content}</div>
          <button>Delete</button>
          <button>Edit</button>
          <form onSubmit={onSubmit}>
            <input placeholder="Enter new comment here..." />
            <button>add comment</button>
          </form>
        </>
      )}
    </PageWrap>
  );
};

export default Article;
