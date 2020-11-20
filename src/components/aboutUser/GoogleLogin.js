import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, firebase, firestore } from "../../firebase";
import { GoogleButton } from "../../styles/StyledLogin";

const GoogleLogin = () => {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);

  const onGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
    history.push("/");
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
            displayName: user.displayName,
            grade: "1",
            classNumber: "1",
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

  return (
    <GoogleButton onClick={onClick}>
      <span style={{ color: "blue" }}>G</span>
      <span style={{ color: "red" }}>o</span>
      <span style={{ color: "yellow" }}>o</span>
      <span style={{ color: "blue" }}>g</span>
      <span style={{ color: "green" }}>l</span>
      <span style={{ color: "red" }}>e</span>
    </GoogleButton>
  );
};

export default GoogleLogin;
