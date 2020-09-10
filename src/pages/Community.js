import React from "react";
import data from "../data.js";
import { Link, Route } from "react-router-dom";
import PageWrap from "./PageWrap";
import values from "../values";
const Community = ({ match }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  const parameter = match.params.clubname;
  let clubname = null;
  for (let i in values.clubs) {
    values.clubs[i].forEach((index) => {
      if (index.link === parameter) {
        clubname = index.name;
      }
    });
  }
  // const index = values.clubs[]
  // console.log(match.params.clubname);
  // *********************************************************
  // There's a little problem
  // if fetched parameter after the "Community" don't exit
  // this component can't load match property.
  // *********************************************************
  let a = data.map((e) => {
    console.log(e.link);
    return (
      <tr key={e.name}>
        <td>{e.id}</td>
        <td>
          <Link to={`/Article/${parameter}/${e.id}`} clubname={clubname}>
            {e.title}
          </Link>
        </td>
        <td>{e.name}</td>
        <td>{e.time}</td>
        <td>{e.views}</td>
      </tr>
    );
  });
  return (
    <PageWrap>
      <div>
        <h2>{clubname} Community</h2>
        <div>
          <Link to="../Write">
            <button>글쓰기</button>
          </Link>
          <input type="text" defaultValue="검색어 입력"></input>
        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>{a}</tbody>
        </table>
      </div>
    </PageWrap>
  );
};
export default Community;
