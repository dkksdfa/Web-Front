import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import { Body, Top, Write, Search } from "../../styles/StyledCommunity";
import { firestore } from "../../firebase";
import { Userinfo } from "..";

const Community = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const category = match.params.category;
  const clublink = match.params.clubname;
  const linkToWrite = `/write/${category}/${clublink}`;

  const fetchData = useCallback(() => {
    setArticles([]);
    setLoading(true);
    firestore
      .collection("clubs")
      .doc(category)
      .get()
      .then((doc) => {
        setArticles(doc.data()[clublink].articles);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, [category, clublink]);
  React.useEffect(() => {
    fetchData();
  }, [match, fetchData]);
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
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <>
          <Top>
            <Search type="text" placeholder="Search..." />

            <Write onClick={onClick}>글쓰기</Write>
          </Top>
          <Body>
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
                      userinfo.userObj && userinfo.userObj.uid === article.uid
                    }
                  />
                );
              })}
          </Body>{" "}
        </>
      )}
    </>
  );
};
export default Community;
