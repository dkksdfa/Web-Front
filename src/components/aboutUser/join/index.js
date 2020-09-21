import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService as auth, firestore } from "../../../firebase";
import PageWrap from "../../PageWrap";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(null);
  const [classnumber, setClass] = useState(null);
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
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
        history.push("/");
      } catch (error) {
        console.log("error : ", error);
        alert(error.message);
      }
      const object = { name, grade, classnumber, uid: userData };
      firestore.collection("additional userinfo").doc(object.uid).set(object);
    }
  };

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "conformPassword") setConformPassword(value);
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "grade") setGrade(parseInt(e.target.value, 10));
    if (e.target.name === "classnumber") setClass(parseInt(e.target.value, 10));
  };
  return (
    <PageWrap>
      <h1>Join page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="conformPassword"
          placeholder="conformPassword"
          value={conformPassword}
          onChange={onChange}
        />{" "}
        <input
          placeholder="name"
          onChange={onChange}
          value={name}
          name="name"
        />
        <select name="grade" onChange={onChange}>
          <option value="" selected disabled hidden>
            학년
          </option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
        </select>
        <select name="classnumber" onChange={onChange}>
          <option value="" selected disabled hidden>
            반
          </option>
          <option value="1">1반</option>
          <option value="2">2반</option>
          <option value="3">3반</option>
          <option value="4">4반</option>
          <option value="5">5반</option>
          <option value="6">6반</option>
          <option value="7">7반</option>
          <option value="8">8반</option>
        </select>
        <input value="Join!" type="submit" />
      </form>
    </PageWrap>
  );
};

export default Join;
