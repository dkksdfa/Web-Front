import React, { createContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import {
  Home,
  School,
  Community,
  Club,
  Write,
  Login,
  Join,
  Modify,
  Article,
} from "./components";
import Nav from "./components/Nav.js";
import "./App.scss";
import { authService } from "./firebase";
export const Userinfo = createContext();
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName || "default name",
        });
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div className="container">
      {init && (
        <Userinfo.Provider
          value={{
            isLoggedIn,
            setLoggedIn,
            userObj,
            setUserObj,
          }}
        >
          <Nav />
          <Route path="/" exact>
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/School" component={School} />
          <Route path="/clubs/:category" exact component={Club} />
          <Route path="/club/:category/:clublink" exact component={Community} />
          <Route path="/write/:category/:clublink" component={Write} />
          <Route
            path="/article/:category/:clublink/:articleId"
            exact
            component={Article}
          />
          <Route path="/Join">
            <Join
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              userObj={userObj}
              setUserObj={setUserObj}
            />
          </Route>
          <Route path="/Modify" component={Modify} />
          <Route path="/Login">
            <Login
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              userObj={userObj}
              setUserObj={setUserObj}
            />
          </Route>
        </Userinfo.Provider>
      )}
    </div>
  );
}

export default App;
