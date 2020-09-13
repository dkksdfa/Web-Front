import React, { useEffect, useContext, useState, useCallback } from "react";
import firebase from "firebase";
import {
  Title,
  Input,
  SubmitButton,
  Form,
  TitleWrap,
  Back,
  TitleBlur,
} from "../styles/StyledJoin";
import { AuthContext } from "./";
import { firestore } from "../firebase";

const Join = () => {
  const [error, setErrors] = useState("");
  const [credential, setCredential] = React.useState({
    name: "",
    grade: "",
    class: "",
    number: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const fetchData = useCallback(() => {
    firestore
      .collection("user")
      .doc("in the end")
      .get()
      .then((doc) => {
        // const data = doc.data()[match.params.category];
        // for (let club in data) {
        //   const newClub = { link: club, data: data[club] };
        //   setClubs((previousclubs) => {
        //     const next = JSON.parse(
        //       JSON.stringify(previousclubs.concat(newClub))
        //     ).sort(sortFunction);
        //     return next;
        //   });
        // }
        console.log(doc);
      })
      .catch((error) => {
        throw error;
      });
  }, [credential]);

  useEffect(() => {
    fetchData();
  }, [firestore]);
  const handleChange = React.useCallback(
    (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value });
    },
    [credential]
  );
  const check = () => {
    if (credential.email === "") {
      return false;
    }
    if (credential.password === "") {
      return false;
    }
    if (credential.password !== credential.confirmedPassword) {
      return false;
    }
    return true;
  };
  const Auth = useContext(AuthContext);
  // const GoogleLogin = (e) => {
  //   e.preventDefault();
  //   const provider = firebase.auto().GoogleAuthProvider();
  //   // provider.addScope;
  // };
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credential.email, credential.password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };
  return (
    <Back>
      <TitleWrap>
        <TitleBlur>
          <Title>Create Your dkdk3 ID</Title>
        </TitleBlur>
      </TitleWrap>
      <Form>
        <Input
          autoComplete="off"
          placeholder="Email"
          onChange={handleChange}
          name="email"
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
        <Input
          autoComplete="off"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <Input
          autoComplete="off"
          placeholder="Grade"
          onChange={handleChange}
          name="grade"
        />
        <Input
          autoComplete="off"
          placeholder="Class"
          onChange={handleChange}
          name="class"
        />
        <Input
          autoComplete="off"
          placeholder="Number"
          onChange={handleChange}
          name="number"
        />

        <SubmitButton style={{ marginBottom: "100px" }}>Join</SubmitButton>
      </Form>
    </Back>
  );
};

export default Join;
