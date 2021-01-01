import React from "react";
import { Route } from "react-router-dom";
import Article from "./club/Article";
import Club from "./club/Club";
import Community from "./community";
import { Write } from "./community/StyledCommunity";
import Home from "./components/home";
import School from "./components/school";
import Join from "./components/user/join";
import Login from "./components/user/login";
import Modify from "./components/user/modify";

const Router = ({ isLoggedIn, userObj, setUserObj }) => (
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

export default Router;
