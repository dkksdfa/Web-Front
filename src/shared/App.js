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
      <Route path="/Club/:id" component={Club} />
      <Route path="/Community" component={Community} exact />
      <Route path="/Community/:clubname" component={Community} />
      <Route path="/Write" component={Write} />
      <Route path="/Signin" component={SignIn} />
      <Route path="/Join" component={Join} />
      <Route path="/Article/:clubname/:id" component={Article} />
    </div>
  );
}

export default App;
