import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
// import { Body, Top, Write, Search } from "../../styles/StyledCommunity";
import { firestore } from "../../firebase";
import { Userinfo } from "..";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const category = match.params.category;
  const clublink = match.params.clublink;
  const linkToWrite = `/write/${category}/${clublink}`;

  const fetchData = useCallback(async () => {
    setArticles([]);
    setLoading(true);
    const articles = await firestore
      .collection("articles")
      .where("club", "==", clublink)
      // .orderBy("date", "desc")
      .get();
    articles.forEach((article) => {
      setArticles((prev) => [...prev, article.data()]);
    });
    setLoading(false);
  }, [category, clublink]);
  React.useEffect(() => {
    fetchData();
  }, [match]);
  const history = useHistory();
  const userinfo = React.useContext(Userinfo);
  const onClick = (e) => {
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
    } else history.push(linkToWrite);
  };
  console.log(articles);
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." />
        <button onClick={onClick}>글쓰기</button>
      </div>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <>
          <div>
            <h1>{category + "  /  " + clublink}</h1>
            {JSON.parse(JSON.stringify(articles))
              .reverse()
              .map((article, index) => {
                return (
                  <ArticlePreview
                    clublink={clublink}
                    category={category}
                    article={article}
                    key={index}
                    index={index}
                    isOwner={
                      userinfo.userObj &&
                      userinfo.userObj.uid === article.creatorId
                    }
                  />
                );
              })}
          </div>
        </>
      )}
    </>
  );
};
export default Community;
