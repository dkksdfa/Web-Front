import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { Body } from "../../styles/StyledCommunity";
import { firestore } from "../../firebase";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const category = match.params.category;
  const linkToWrite = `/write/${category}`;
  let clubname = null;
  const clublink = match.params.clubname;
  const fetchData = useCallback(() => {
    setArticles([]);
    firestore
      .collection("clubs")
      .doc("fast car")
      .get()
      .then((doc) => {
        clubname = doc.data()[category][clublink].name;
        const data = doc.data()[category][clublink].articles;
        setArticles(data);
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

  return (
    <Body>
      <Link to={linkToWrite}>
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
