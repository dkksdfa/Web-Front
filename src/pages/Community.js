import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import values from "../values";
import ArticlePreview from "./ArticlePreview";
import { Body } from "../styles/StyledCommunity";
import { firestore } from "../firebase";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  let clubname = null;
  const fetchData = useCallback(() => {
    setArticles([]);
    firestore
      .collection("clubs")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data()[match.params.category][match.params.clubname];
          console.log(data.articles);
          throw "Error";
          clubname = data.name;
          // for (let article in data.articles) {
          // for (let articleData in article) {
          //   console.log("articleData", articleData);
          // }
          //    const {
          //        content,
          //          name,
          //            title,
          //              views,
          //      comments,
          //        date,
          //          id,
          //            count,
          //            } = article;
          //  const newArticle = {
          //      content,
          //          name,
          //              title,
          //id,
          //views,
          //              comments,
          //              date,
          //            count,
          //            };
          //console.log(newArticle);
          //const id = data.articles[article]
          //setArticles((articles) => articles.concat(newArticle));
          // }
        });
      })
      .catch((error) => {
        throw error;
      });
  }, [articles, match]);

  React.useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [match, firestore]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Body>
      <Link to="../Write">
        <button>글쓰기</button>
      </Link>
      <input type="text" placeholder="검색어 입력" />
      {articles.map((article, index) => (
        <ArticlePreview
          clubname={clubname}
          match={match}
          article={article}
          key={index}
        />
      ))}
    </Body>
  );
};
export default Community;
