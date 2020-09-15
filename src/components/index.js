import React from "react";
export { default as Home } from "./home/Home";
export { default as School } from "./school/School";
export { default as Club } from "./aboutClub/Club";
export { default as Community } from "./aboutClub/Community";
export { default as Write } from "./aboutClub/Write";
export { default as Login } from "./aboutUser/Login";
export { default as Join } from "./aboutUser/Join";
export { default as Article } from "./aboutClub/Article";

export const LoginInfo = React.createContext(null);
export const JoinInfo = React.createContext({
  name: "",
  email: "",
  password: "",
  grade: "",
  class: "",
  number: "",
});
