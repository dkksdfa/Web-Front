import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { Body, Top, Write, Search } from "../../styles/StyledCommunity";
import { firestore } from "../../firebase";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  let clubname = null;
  const category = match.params.category;
  const clublink = match.params.clubname;
  const linkToWrite = `/write/${category}/${clublink}`;

  //포기... 왜 안되는지 모르겠네
  const fetchData = useCallback(() => {
    setArticles([]);
    firestore
      .collection("clubs")
      .doc(category)
      .collection(clublink)
      .get()
      .then(
        (doc) => {
          doc.forEach((aa) => {
            console.log(aa.data());
            clubname = aa.data()["writer"];
            setArticles(aa.data());
          });
        } /*{
        if (doc.data()[category]) {
          if (doc.data()[category][clublink]) {
            clubname = doc.data()[category][clublink].name;
            const data = doc.data()[category][clublink].articles;
            setArticles(data);
          }
        }
      }*/
      )
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
    <div>
      <Top>
        <Search type="text" placeholder="Search..." />
        <Link to={linkToWrite}>
          <Write>글쓰기</Write>
        </Link>
      </Top>
      {category + "  /  " + clublink}
      <Body>
        {/*articles.map((article, index) => (
          <ArticlePreview
            clubname={clubname}
            match={match}
            article={article}
            key={index}
          />
        ))*/}
      </Body>
    </div>
  );
};
export default Community;
