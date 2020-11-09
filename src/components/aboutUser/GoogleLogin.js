import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, firebase, firestore } from "../../firebase";

const GoogleLogin = ({ isLoggedIn, setLoggedIn, userObj, setUserObj }) => {
  const history = useHistory();
  const [dbUser, setDbUser] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isExist, setIsExist] = useState(false);

  const onGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };
  const getData = async () => {
    await authService.onAuthStateChanged(async (user) => {
      if (user) {
        setDbUser({ displayName: user.displayName, uid: user.uid });

        console.log({ displayName: user.displayName, uid: user.uid });
        const check = await firestore
          .collection("additional userinfo")
          .doc(user.uid)
          .get();
        if (check.data()) {
          setIsExist(true);
        } else setIsExist(false);
      }
    });
  };
  useEffect(() => {
    getData();
  }, [clicked]);
  const onClick = async () => {
    onGoogle();
    setClicked(true);
    if (isLoggedIn) {
      history.push("/");
    } else {
      await firestore.collection("additional userinfo").doc(userObj.uid).set({
        name: userObj.displayName,
        grade: "1",
        classnumber: "1",
      });
      // alert("Set your grade and class");
      // history.push("/Modify");
    }
  };

  return <button onClick={onClick}>Login with google</button>;
};

export default GoogleLogin;
