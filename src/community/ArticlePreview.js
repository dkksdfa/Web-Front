import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../firebase";
import {
  Body,
  Title,
  Writer,
  Inner,
  Info,
  Comment,
} from "./StyledArticlePreview";
import { Link } from "react-router-dom";

const ArticlePreview = ({ clublink, category, article, isOwner }) => {
  const [creatorName, setCreatorName] = useState("");
  const setInit = useCallback(async () => {
    const dbUser = await firestore
      .collection("additional userinfo")
      .doc(article.creatorId)
      .get();
    setCreatorName(dbUser.data().name);
  }, [article]);
  useEffect(() => {
    setInit();
  }, [setInit]);
  const onEditClick = () => {};

  const onDeleteClick = async () => {
    const lastCheck = window.confirm(
      "Are you sure that you delete this article?"
    );
    if (lastCheck) {
      await firestore.collection("articles").doc(article.articleId).delete();
    }
  };

  const articleLink = `/article/${category}/${clublink}/${article.articleId}`;
  return (
    <Body>
      <Link to={articleLink}>
        <Inner>
          <div>
            <Writer>{creatorName}</Writer>
            <Info>
              {Date(new Date(article.date.seconds * 1000)).toString()}
            </Info>
            <Title>
              {article.title.length > 10
                ? article.title.slice(0, 10) + "......"
                : article.title}
            </Title>
            <Comment>
              {/*Object.keys(article.comments).length || 0*/} Comments{" "}
            </Comment>{" "}
            {isOwner && (
              <>
                <span onClick={onDeleteClick}>Delete</span>{" "}
                <span onClick={onEditClick}>Edit</span>
              </>
            )}
          </div>
        </Inner>
      </Link>
    </Body>
  );
};
export default ArticlePreview;
