import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth } from "../../firebase";
import PageWrap from "../PageWrap";
import { ButtonDiv } from "../../styles/StyledLogin";
import GoogleLogin from "./GoogleLogin";
import {
  StyledPageTitle,
  Input,
  Button,
  InputTitle,
} from "../../library/styles";

const loginButtonTheme = { backgroundColor: "hotpink", hoverColor: "pink" };
const joinButtonTheme = {
  backgroundColor: "skyblue",
  hoverColor: "rgb(177, 228, 248)",
};
export default ({ isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      throw error;
    }
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    console.log({ email, password });
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const goToJoin = () => {
    history.push("/join");
  };

  return (
    <PageWrap>
      <StyledPageTitle>login page</StyledPageTitle>

      <InputTitle>Email</InputTitle>
      <Input
        type="email"
        name="email"
        autoComplete="off"
        value={email}
        onChange={onChange}
      />
      <InputTitle>Password</InputTitle>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />

      <ButtonDiv>
        <Button theme={loginButtonTheme} onClick={onSubmit}>
          login
        </Button>
        <Button
          theme={joinButtonTheme}
          style={{ margin: "0 10px" }}
          onClick={goToJoin}
        >
          join
        </Button>
        <GoogleLogin />
      </ButtonDiv>
    </PageWrap>
  );
};
