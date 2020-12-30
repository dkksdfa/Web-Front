import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth, firestore } from "../../firebase";
import { InputTitle } from "../../styles/StyledLogin";
import {
  StyledSelect,
  SubmitButton,
  SumbitDiv,
} from "../../styles/StyledMoodify";
import { Input, StyledPageTitle } from "../../common/styles";
import PageWrap from "../PageWrap";

const Join = ({ isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("1");
  const [classnumber, setClass] = useState("1");

  const history = useHistory();
  // const Fun = async () => {
  //   const storageRef = storage.ref();
  //   const normalImage = storageRef.child("images/normal.png");
  //   // const imageData = await normalImage.getMetadata();
  //   console.log(imageData);
  // };
  // useEffect(() => {
  //   Fun();
  // }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("The password must be matched with conform password.");
    } else {
      let userData;
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        await auth.onAuthStateChanged((user) => {
          if (user) {
            userData = user.uid;
          }
        });
        const object = {
          displayName: name,
          grade,
          classNumber: classnumber,
        };
        firestore.collection("additional userinfo").doc(userData).set(object);
        history.push("/");
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "grade") setGrade(e.target.value);
    if (e.target.name === "classnumber") setClass(e.target.value);
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
  return (
    <PageWrap>
      <StyledPageTitle>Join page</StyledPageTitle>
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
          autoComplete="off"
          value={password}
          onChange={onChange}
        />
        <InputTitle>Confirm password</InputTitle>
        <Input
          type="password"
          name="confirmPassword"
          autoComplete="off"
          value={confirmPassword}
          onChange={onChange}
        />
        <InputTitle>name</InputTitle>
        <Input
          onChange={onChange}
          autoComplete="off"
          value={name}
          name="name"
        />
        <InputTitle>Years</InputTitle>
        <StyledSelect name="grade" onChange={onChange}>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
        </StyledSelect>
        <InputTitle>Class</InputTitle>
        <StyledSelect name="classnumber" onChange={onChange}>
          <option value="1">1반</option>
          <option value="2">2반</option>
          <option value="3">3반</option>
          <option value="4">4반</option>
          <option value="5">5반</option>
          <option value="6">6반</option>
          <option value="7">7반</option>
          <option value="8">8반</option>
        </StyledSelect>
        <SumbitDiv>
          <SubmitButton type="submit">join!</SubmitButton>
        </SumbitDiv>
      </form>
    </PageWrap>
  );
};

export default Join;
