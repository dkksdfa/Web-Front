import commonConstants from "../common/constants.json";
import CommonFunctions from "../common/functions";
import { firestore } from "../firebase";
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
    return [dbArticle, null];
  }

  async getArticleCreatorName(creatorId) {
    const creator = await this.common.getDoc(this.USER, creatorId);
    return creator.displayName;
  }

  async deleteArticle(articleId) {
    const lastCheck = window.confirm(constants.CHECK_MESSAGE);
    if (!lastCheck) return null;
    // should delete all of comments with it.
    const error = this.common.deleteDoc(this.USER, articleId);
    if (error !== null) return error;
    return null;
  }

  async onArticleLoad(articleId, setError, setArticle, setLoading) {
    const [article, error] = await this.getArticle(articleId);
    if (error !== null) setError(true);
    const creatorName = await this.getArticleCreatorName(article.creatorId);
    const timestampt = article.date.seconds;
    const date = this.getDateObject(timestampt);
    setArticle({ ...article, creatorName, date });
    setLoading(false);
  }

  async onDelete(articleId, setError, history, category, clublink) {
    const error = this.deleteArticle(articleId);
    if (error !== null) setError(true);
    else history.push(`/club/${category}/${clublink}`);
  }

  //(snapshot) => {
  //   const commentArray = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  // }

  snapshotCallback(snapshot) {}

  async getComments(articleId, setComments) {
    try {
      firestore
        .collection("comments")
        .where("articleId", "==", articleId)
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          const commentArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setComments(commentArray);
        });
      return null;
    } catch (e) {
      return e;
    }
  }
  async onCommentsLoad(setLoading, setComments, articleId, setError) {
    setLoading(true);
    setComments([]);
    const error = this.getComments(articleId, setComments);
    if (error !== null) setError(true);
    setLoading(false);
  }
}

export default ArticleFunctions;
