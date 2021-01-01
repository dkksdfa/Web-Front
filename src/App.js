import React, { createContext, useEffect, useState } from "react";
import Nav from "./common/nav/index.js";
import { authService, firestore } from "./firebase";
import Router from "./Router.js";
import { StyledAppContainer } from "./StyledApp.js";

export const Userinfo = createContext();

const initializeWhenUserExist = async (user, setUserObj) => {
  const collectionName = "additional userinfo";
  const userCollection = await firestore.collection(collectionName);
  const additionalInfo = await userCollection.doc(user.uid).get();
  const uid = user.uid;
  const displayName = user.displayName || "default name";
  const grade = additionalInfo.data().grade;
  const classNumber = additionalInfo.data().classNumber;
  setUserObj({ uid, displayName, grade, classNumber });
};

const initializeFunction = (setLoggedIn, setUserObj) => {
  authService.onAuthStateChanged(async (user) => {
    if (user) {
      initializeWhenUserExist(user, setUserObj);
      setLoggedIn(true);
    } else setLoggedIn(false);
  });
};

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    initializeFunction(setLoggedIn, setUserObj);
    setInit(true);
  }, []);

  return (
    <StyledAppContainer>
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
          <Router
            isLoggedIn={isLoggedIn}
            userObj={userObj}
            setUserObj={setUserObj}
          />
        </Userinfo.Provider>
      )}
    </StyledAppContainer>
  );
};

export default App;
