import React, { useState, useEffect, useCallback } from "react";
import { Input, SubmitButton, Form } from "../../styles/StyledJoin";
import { firestore } from "../../firebase";

const FirstJoin = ({ credential, handleChange, setStatus }) => {
  const [users, setUsers] = useState([]);
  const CheckIntegrity = ({ email, password, confirmedPassword }) => {
    console.log(email, password, confirmedPassword);
    if (email === "") {
      return false;
    }
    if (email.indexOf("@") === -1) {
      return false;
    }
    if (password === "" || password.length < 8 || password.length > 24) {
      return false;
    }
    if (password !== confirmedPassword) {
      return false;
    }
    return true;
  };

  const fetchData = useCallback(() => {
    setUsers([]);
    firestore
      .collection("user")
      .doc("in the end")
      .get()
      .then((doc) => {
        const userList = doc.data().user;
        userList.map((user) => {
          setUsers((previous) => previous.concat(user));
        });
      })
      .catch((error) => {
        throw error;
      });
    users.forEach((user) => {
      if (user.email === credential.email) {
        return false;
      }
    });
    return true;
  }, [credential]);

  const handleClick = () => {
    console.log(
      credential.email,
      credential.password,
      credential.confirmedPassword
    );
    const check = CheckIntegrity(
      credential.email,
      credential.password,
      credential.confirmedPassword
    );
    console.log(check);
    if (check) {
      if (fetchData()) {
        setStatus("half");
      } else {
        alert("Email already exist. Please try again.");
      }
    }
    {
      console.log("failed");
    }
  };
  return (
    <Form>
      <Input
        autoComplete="off"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        type="email"
      />
      <Input
        autoComplete="off"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        name="password"
      />
      <Input
        autoComplete="off"
        placeholder="Confirm password"
        type="password"
        onChange={handleChange}
        name="confirmedPassword"
      />
      <SubmitButton onClick={handleClick} style={{ marginBottom: "100px" }}>
        Continue
      </SubmitButton>
    </Form>
  );
};
export default FirstJoin;
