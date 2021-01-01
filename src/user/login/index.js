import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth } from "../../firebase";
import PageWrap from "../../common/page-wrap";
import GoogleLogin from "./GoogleLogin";
import {
  StyledPageTitle,
  Input,
  Button,
  InputTitle,
  ButtonsWrapper,
} from "../../common/styles";

const loginButtonTheme = { backgroundColor: "hotpink", hoverColor: "pink" };
const joinButtonTheme = {
  backgroundColor: "skyblue",
  hoverColor: "rgb(177, 228, 248)",
};

const Login = ({ isLoggedIn }) => {
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

      <ButtonsWrapper>
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
      </ButtonsWrapper>
    </PageWrap>
  );
};

export default Login;
