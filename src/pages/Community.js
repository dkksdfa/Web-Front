import React from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <h2 style={{ marginTop: "200px" }}>{clubName} Community</h2>
    </div>
  );
};
export default Community;
