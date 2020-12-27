import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth } from "../../firebase";
import { StyledTitle, Input } from "../../styles/StyledPageWrap";
import PageWrap from "../PageWrap";
import {
  InputTitle,
  JoinButton,
  LoginButton,
  LoginDiv,
} from "../../styles/StyledLogin";
import GoogleLogin from "./GoogleLogin";

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
      <StyledTitle>login page</StyledTitle>

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

      <LoginDiv>
        <LoginButton onClick={onSubmit}>login</LoginButton>
        <JoinButton onClick={goToJoin}>join</JoinButton>
        <GoogleLogin />
      </LoginDiv>
    </PageWrap>
  );
};
