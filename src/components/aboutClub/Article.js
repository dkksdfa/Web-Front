import React, { useEffect, useState } from "react";
import PageWrap from "../PageWrap";
// import {} from "../../styles/StyledArticle";
import { firestore } from "../../firebase";
const Article = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    params: { category, id, clublink },
  } = match;
  console.log(id);

  useEffect(() => {
    setLoading(true);
    const getArticle = async () => {
      const rawData = await firestore.collection("clubs").doc(category).get();
      const articles = rawData.data()[clublink].articles;
      const article = articles[articles.length - 1 - id];
      setArticle(article);
      setLoading(false);
    };
    getArticle();
  }, [category, clublink]);

  return (
    <PageWrap>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>{article.title}</h1>
          <span>
            {article.date} | views : {article.views}
          </span>
          <div>{article.content}</div>
        </>
      )}
    </PageWrap>
  );
};

export default Article;
