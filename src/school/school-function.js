import axios from "axios";
import cheerio from "cheerio";
import { firestore } from "../firebase";
import constants from "./constants.json";

const isTodayMealExist = ($) => $("td.today")[0].children[1] !== undefined;

const getFormattedMeal = (rawMealData) => rawMealData.slice(7, rawMealData.length - 6).split(",");

const handleGettingMeal = async ($) => {
  const $todayMealLi = $("td.today")[0].children[1];
  const $bodyList = $todayMealLi.children[1].children[1].attribs.onclick;
  const mealID = $bodyList.replace(/[^0-9]/g, "");
  const todayMealResponse = await axios.get(`${constants.MEAL_LIST_URL}${mealID}`);
  const op = cheerio.load(todayMealResponse.data);
  const $tableList = op("table tbody").children("tr")[3];
  const mealData = $tableList.children[3].children[0].data;
  const formattedMealList = getFormattedMeal(mealData);
  return formattedMealList;
};

export const getTodayMeal = async (setLoading, setMeal) => {
  setLoading(true);
  try {
    const response = await axios.get(constants.MONTHLY_MEAL_URL);
    const $ = cheerio.load(response.data);
    if (isTodayMealExist($)) setMeal(await handleGettingMeal($));
    else setMeal(false);
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
};

export const getSpecificEBSUrl = async (userObj) => {
  const userData = await firestore.collection("additional userinfo").doc(userObj.uid).get();
  return `https://hoc23.ebssw.kr/20dk${userData.data().grade}${userData.data().classNumber}`;
};
