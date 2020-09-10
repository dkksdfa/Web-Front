import React from "react";
import PageWrap from "./PageWrap";
import { Link } from "react-router-dom";
import {
  Title,
  Input,
  SubmitButton,
  Form,
  BlueText,
} from "../styles/StyledSignIn";

const SignIn = () => {
  // const ID = React.useRef(null);
  // const password = React.useRef(null);
  // const getID = () => {
  //   console.log(ID.current.value);
  // };
  // const getPassword = () => {
  //   console.log(password.current.value);
  // };
  return (
    <PageWrap>
      <Title>Please sign in.</Title>
      <Form>
        <Input
          type="text"
          name="name"
          autoComplete="off"
          required
          placeholder="Email"
        />
        <Input
          type="password"
          autocomplete="off"
          required
          name="Password"
          placeholder="Password"
        />
        <SubmitButton>Sign In</SubmitButton>
        <BlueText>
          <Link to="/something">Forgot your ID or password?</Link>
        </BlueText>
        <BlueText>
          <Link to="/Join" target="_blank">
            Don't have an ID? Create one now.
          </Link>
        </BlueText>
      </Form>
    </PageWrap>
  );
};

export default SignIn;
