import React from "react";
const Community = ({ match }) => {
  // const clubName =  || "Just Talk";
  // console.log(match.params.clubname);

  // *********************************************************
  // There's a little problem
  // if fetched parameter after the "Community" don't exit
  // this component can't load match property.
  // *********************************************************
  return (
    <div>
      <h2 style={{ marginTop: "200px" }}>{/*clubName*/} Community</h2>
    </div>
  );
};
export default Community;
