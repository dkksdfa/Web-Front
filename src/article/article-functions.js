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
    this.COMMENT = commonConstants.firebase.COMMENT;
    this.common = new CommonFunctions();
  }
  getDateFromTimestamp(timestamp) {
    return new Date(timestamp * 1000);
  }

  getDateObject(timestamp) {
    const date = this.getDateFromTimestamp(timestamp);

    return {
      formmatedDate: `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
      originaldate: Date(
        `${date.getFullYear()}-${
          date.getMonth() - 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      ),
    };
  }

  async getArticle(articleId) {
    const [dbArticle, articleErr] = await this.common.getDoc(this.ARTICLE, articleId);
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
    if ((await error) !== null)
      setError({
        error: true,
        message: "There's a problem to add this comment.",
      });
    const creatorName = await this.getArticleCreatorName(article.creatorId);
    const timestampt = article.date.seconds;
    const date = this.getDateObject(timestampt);
    setArticle({ ...article, creatorName, date });
    setLoading(false);
  }

  async onDelete(articleId, setError, history, category, clublink) {
    const error = this.deleteArticle(articleId);
    if ((await error) !== null)
      setError({
        error: true,
        message: "There's a problem to get this article.",
      });
    else history.push(`/club/${category}/${clublink}`);
  }

  async getComments(articleId, cachedUid, setCachedUid) {
    try {
      let result = [];
      const dbComments = await firestore
        .collection("comments")
        .where("articleId", "==", articleId)
        .orderBy("date", "desc")
        .get();
      const asyncFunc = async (cachedUid, setCachedUid, creatorId) => {
        const result = await this.getCommentCreatorName(cachedUid, setCachedUid, creatorId);
        return result;
      };
      await dbComments.forEach((dbComment, index) => {
        const comment = dbComment.data();

        const [creatorName, error] = asyncFunc(cachedUid, setCachedUid, comment.creatorId);
        if (error !== null || creatorName === undefined) throw error;

        comment.creatorName = creatorName;
        result = [...result, comment];
        console.log(result);
        //
      });
      // console.log(result);
      return [result, null];
    } catch (e) {
      return [null, e];
    }
  }

  async getUserName(userId) {
    try {
      const [result, error] = await this.common.getDoc(this.USER, userId);
      if (error !== null) throw error;
      return [result.displayName, null];
    } catch (error) {
      return [null, error];
    }
  }

  async getCommentCreatorName(cachedUid, setCachedUid, commentUid) {
    const userInfo = cachedUid.filter((u) => u.uid === commentUid);
    if (userInfo.length === 1) return [userInfo.name, null];
    const [userName, error] = await this.getUserName(commentUid);
    if ((await error) !== null) return [null, error];
    const nextCachedUid = cachedUid.concat({ uid: commentUid, name: userName });
    setCachedUid(nextCachedUid);
    return [userName, null];
  }

  async onCommentsLoad(cachedUid, articleId, setCachedUid) {
    const [comments, error] = await this.getComments(articleId, cachedUid, setCachedUid);

    if ((await error) !== null)
      return [null, { error: true, message: "There's a problem to get comments." }];
    return [comments, null];
  }

  async editComment(id, content) {
    try {
      await firestore.collection(this.COMMENT).doc(id).set({ content }, { merge: true });
      return null;
    } catch (e) {
      return e;
    }
  }
}

export default ArticleFunctions;
