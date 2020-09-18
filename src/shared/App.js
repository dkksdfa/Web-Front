import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Schedule,
  School,
  Community,
  Club,
  Write,
  Login,
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
      <Route path="/clubs/:category" component={Club} exact />
      <Route path="/club/:category/:clubname" component={Community} exact />
      <Route path="/write/:category/:clubname" component={Write} />
      <Route
        path="/article/:category/:clubname/:id"
        component={Article}
        exact
      />
      <Route path="/Join" render={() => <Join />} />
      <Route path="/Login" render={() => <Login />} />
    </div>
  );
}

export default App;
