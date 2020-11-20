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
import { authService, firestore } from "./firebase";
export const Userinfo = createContext();
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        setLoggedIn(true);
        const additionalInfo = await firestore
          .collection("additional userinfo")
          .doc(user.uid)
          .get();
        setUserObj({
          uid: user.uid,
          displayName: user.displayName || "default name",
          grade: additionalInfo.data().grade,
          classNumber: additionalInfo.data().classNumber,
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
        </Userinfo.Provider>
      )}
    </div>
  );
}

export default App;
