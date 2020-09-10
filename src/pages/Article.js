import React from "react";
import values from "../values";
import PageWrap from "./PageWrap";
import {} from "../styles/StyledArticle";
const Article = ({ match }) => {
  const category = match.params.category;
  const id = match.params.id;
  const clubname = match.params.clubname;
  // console.log(id, clubname);
  const data = values.clubs[category]
    .find((club) => club.link === clubname)
    .articles.find((article) => article.id === Number(id));
  const { title, content, views, time } = data;
  return (
    <PageWrap>
      <h1>{title}</h1>
      <span>
        {time} | views : {views}
      </span>
      <div>{content}</div>
    </PageWrap>
  );
};

export default Article;
