import React, { useCallback, useState, useContext } from "react";
import PageWrap from "./PageWrap";
import { Link } from "react-router-dom";
import {
  Title,
  Input,
  SubmitButton,
  Form,
  BlueText,
  Image,
  MarginBetweenInputAndButton,
} from "../styles/StyledLogin";

import { AuthContext } from "./index";
const Login = () => {
  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState("");
  const Auth = useContext(AuthContext);
  const handleChange = useCallback(
    (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value });
    },
    [credential]
  );
  console.log(credential);

  return (
    <PageWrap>
      <Title>Please sign in.</Title>
      <Form>
        <MarginBetweenInputAndButton>
          <Input
            type="text"
            name="email"
            autoComplete="off"
            required
            type="email"
            placeholder="Email"
            value={credential.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            autocomplete="off"
            required
            name="password"
            value={credential.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </MarginBetweenInputAndButton>
        <SubmitButton isGoogle={true} type="button">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </SubmitButton>
        <SubmitButton isGoogle={false}>Login</SubmitButton>
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

export default Login;
