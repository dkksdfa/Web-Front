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
} from "../pages";
import Nav from "../components/Nav.js";
function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/School" component={School} />
      <Route path="/Club/:id" component={Club} />
      <Route path="/Community/:clubname" component={Community} />
      <Route path="/Write" component={Write} />
      <Route path="/Signin" component={SignIn} />
      <Route path="/Join" component={Join} />
    </div>
  );
}

export default App;
