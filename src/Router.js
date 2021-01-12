import React from "react";
import { Route } from "react-router-dom";
import Article from "./article";
import Club from "./club";
import Write from "./write";
import Community from "./community";
import Home from "./home";
import School from "./school";
import Join from "./user/join";
import Login from "./user/login";
import Modify from "./user/modify";

const Router = ({ isLoggedIn, userObj, setUserObj }) => {
  console.log("rrr");
  return (
    <>
      <Route path="/" exact>
        <Home isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/School">
        <School userObj={userObj} />
      </Route>
      <Route path="/clubs/:category" exact component={Club} />
      <Route path="/club/:category/:clublink" exact component={Community} />
      <Route path="/write/:category/:clublink" component={Write} />
      <Route
        path="/article/:category/:clublink/:articleId"
        exact
        component={Article}
      />
      <Route path="/Join">
        <Join isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/Modify">
        <Modify
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          setUserObj={setUserObj}
        />
      </Route>
      <Route path="/Login">
        <Login isLoggedIn={isLoggedIn} />
      </Route>
    </>
  );
};

export default Router;
