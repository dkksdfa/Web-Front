import React from "react";
import data from "../data.js";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 1100px;
  background: #444;
  display: flex;
  /* align-self: flex-end; */
`;

const Community = ({ match = "Just Talk" }) => {
  const clubName = match.params.clubname || match;
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
          <Link to={`${e.id}`}>{e.title}</Link>
        </td>
        <td>{e.name}</td>
        <td>{e.time}</td>
        <td>{e.views}</td>
      </tr>
    );
  });
  return (
    <Background>
      <div>
        <h2 style={{ marginTop: "200px" }}></h2>
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
    </Background>
  );
};
export default Community;
