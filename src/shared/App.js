import React from "react";
// import Home from "../components/Home.js";
import { Route } from "react-router-dom";
import { Home, Schedule, School, Community, Club, Write } from "../pages";
import Nav from "../components/Nav.js";
function App() {
  const url = "main";
  return (
    <div>
      <Nav main={url === "main"} />
      <Route exact path="/" component={Home} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/School" component={School} />
      <Route path="/Club/:id" component={Club} />
      <Route path="/Community/:clubname" component={Community} />
      <Route path="/Write" component={Write} />
    </div>
  );
}

export default App;
