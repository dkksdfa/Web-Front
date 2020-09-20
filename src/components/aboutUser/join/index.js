import React from "react";
import { default as First } from "./Join1";

const Join = ({ match }) => {
  console.error("회원가입 할 시 이메일 유효성 검사 해야함");
  return (
    <>
      <h1>Join page</h1>
      <First />
    </>
  );
};

export default Join;
