import React, { useState } from "react";
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
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => history.goBack());
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
  if (isLoggedIn) {
    const toHome = () => {
      history.push("/");
    };
    return (
      <>
        <h1>You are already loggedIn. </h1>
        <button onClick={toHome}>Go to home</button>
      </>
    );
  }
  const goToJoin = () => {
    history.push("/join");
  };

  return (
    <PageWrap>
      <StyledTitle>login page</StyledTitle>
      <form onSubmit={onSubmit}>
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
          <LoginButton type="submit">login</LoginButton>
          <JoinButton onClick={goToJoin}>join</JoinButton>
          <GoogleLogin />
        </LoginDiv>
      </form>
    </PageWrap>
  );
};
