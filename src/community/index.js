import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { Body, Top, Write, Search } from "./StyledCommunity";
import { firestore } from "../firebase";
import { Userinfo } from "../App";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const category = match.params.category;
  const clublink = match.params.clublink;
  const linkToWrite = `/write/${category}/${clublink}`;

  const fetchData = useCallback(async () => {
    setLoading(true);
    const articles = await firestore
      .collection("articles")
      .where("club", "==", clublink)
      .orderBy("date", "asc")
      .get();
    articles.forEach((article) => {
      setArticles((prev) => [...prev, article.data()]);
    });
    setLoading(false);
  }, [clublink]);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  const history = useHistory();
  const userinfo = React.useContext(Userinfo);
  const onClick = (e) => {
    if (!userinfo.isLoggedIn) {
      alert("로그인을 해주세요.");
      history.push("/login");
    } else history.push(linkToWrite);
  };
  return (
    <>
      <Top>
        <Search type="text" placeholder="Search..." />
        <Write onClick={onClick}>글쓰기</Write>
      </Top>
      <Body>
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
      </Body>
    </>
  );
};
export default Community;
