import { createContext } from "react";

export const clublist = {
  SW: [
    "webfront",
    "ev3",
    "youtube",
    "basicdesign",
    "ev3",
    "jewelry",
    "mural",
    "shoesdesign",
    "practicaldesign",
  ],
  Food: ["cookingmedia", "dalbodre", "streetrestaurant", "sugar"],
  Finance: [
    "analyzeeconomy",
    "financialvillage",
    "practicalaccounting",
    "underwriting",
  ],
  Other: [
    "band",
    "billiards",
    "boardgame",
    "broadcast",
    "cheer",
    "chinese",
    "dance",
    "ddobagi",
    "employment",
    "handicraft",
    "hanyang",
    "nailart",
    "plamodel",
    "portfolio",
    "promotion1",
    "promotion2",
    "promotion3",
    "promotionvideo",
    "puzzle",
    "screenseller",
    "talent",
  ],
};

export { default as Home } from "./home/Home";
export { default as School } from "./school/School";
export { default as Club } from "./aboutClub/Club";
export { default as Community } from "./aboutClub/Community";
export { default as Write } from "./aboutClub/Write";
export { default as Login } from "./aboutUser/Login.js";
export { default as Join } from "./aboutUser/Join.js";
export { default as Modify } from "./aboutUser/Modify.js";
export { default as Article } from "./aboutClub/Article";
