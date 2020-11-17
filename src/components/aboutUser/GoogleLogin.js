import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, firebase, firestore } from "../../firebase";

const GoogleLogin = () => {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);

  const onGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
    history.goBack();
  };
  const getData = async () => {
    await authService.onAuthStateChanged(async (user) => {
      if (user) {
        const check = await firestore
          .collection("additional userinfo")
          .doc(user.uid)
          .get();
        if (!check.data()) {
          await firestore.collection("additional userinfo").doc(user.uid).set({
            name: user.displayName,
            grade: "1",
            classnumber: "1",
          });
        }
      }
    });
  };
  useEffect(() => {
    getData();
  }, [clicked]);
  const onClick = async () => {
    onGoogle();
    setClicked(true);
  };

  return <button onClick={onClick}>Login with google</button>;
};

export default GoogleLogin;
