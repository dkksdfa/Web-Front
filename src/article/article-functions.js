import commonConstants from "../common/constants.json";
import CommonFunctions from "../common/functions";
import constants from "./constants.json";

class ArticleFunctions {
  constructor() {
    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    this.ARTICLE = commonConstants.firebase.ARTICLE;
    this.USER = commonConstants.firebase.USER;
    this.common = new CommonFunctions();
  }
  getDateFromTimestamp(timestamp) {
    return new Date(timestamp * 1000);
  }

  getDateObject(timestamp) {
    const date = this.getDateFromTimestamp(timestamp);

    return {
      formmatedDate: `${
        this.months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`,
      originaldate: Date(
        `${date.getFullYear()}-${
          date.getMonth() - 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      ),
    };
  }

  async getArticle(articleId) {
    const [dbArticle, articleErr] = await this.common.getDoc(
      this.ARTICLE,
      articleId
    );
    if (articleErr) return [null, articleErr];
    const [dbUser, usrErr] = await this.common.getDoc(
      this.USER,
      dbArticle.creatorId
    );
    if (usrErr) return [null, usrErr];
    const creatorName = dbUser.displayName;
    const timestampt = dbArticle.date.seconds;
    const date = this.getDateObject(timestampt);
    return [{ ...dbArticle, creatorName, date }, null];
  }

  async deleteArticle(articleId) {
    const lastCheck = window.confirm(constants.CHECK_MESSAGE);
    if (!lastCheck) return null;
    // should delete all of comments with it.
    const error = this.common.deleteDoc(this.USER, articleId);
    if (error !== null) return error;
    return null;
  }
}

export default ArticleFunctions;
