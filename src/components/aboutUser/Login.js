import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth } from "../../firebase";
import PageWrap from "../PageWrap";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => history.push("/"));
    } catch (error) {
      // if error occurred
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
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

  return (
    <PageWrap>
      <h1>login page</h1>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="login" />
      </form>

      <button>google login</button>
      <p>create id</p>
    </PageWrap>
  );
};
