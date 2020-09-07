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
  return (
    <PageWrap>
      <Title>Please sign in.</Title>
      <Form>
        <Input placeholder="ID" />
        <Input placeholder="Password" />
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
