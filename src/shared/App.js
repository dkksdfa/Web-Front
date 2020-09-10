import React from "react";
// import Home from "../components/Home.js";
import { Route } from "react-router-dom";

import {
  Home,
  Schedule,
  School,
  Community,
  Club,
  Write,
  SignIn,
  Join,
  Article,
} from "../pages";
import Nav from "../components/Nav.js";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/School" component={School} />
      <Route path="/r/:category" component={Club} exact />
      <Route path="/r/:category/:clubname" component={Community} exact />
      <Route path="/Write" component={Write} />
      <Route path="/Signin" component={SignIn} />
      <Route path="/Join" component={Join} />
      <Route path="/r/:category/:clubname/:id" component={Article} exact />
    </div>
  );
}

export default App;
