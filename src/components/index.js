import { createContext } from "react";

export { default as Home } from "./home/Home";
export { default as School } from "./school/School";
export { default as Club } from "./aboutClub/Club";
export { default as Community } from "./aboutClub/Community";
export { default as Write } from "./aboutClub/Write";
export { default as Login } from "./aboutUser/Login.js";
export { default as Join } from "./aboutUser/Join.js";
export { default as Modify } from "./aboutUser/Modify.js";
export { default as Article } from "./aboutClub/Article";

export const Userinfo = createContext();
