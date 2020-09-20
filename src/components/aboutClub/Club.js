import React, { useEffect, useState, useCallback } from "react";
import { firestore } from "../../firebase";
import { sortFunction } from "../../library/functions.js";
import RenderClub from "./RenderClub";
const Club = ({ match }) => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = match.params.category;
  const fetchData = async () => {
    setLoading(true);

    await firestore
      .collection("clubs")
      .doc(match.params.category)
      .get()
      .then((doc) => {
        setClubs([]);
        return doc;
      })
      .then((docs) => {
        for (let i in docs.data()) {
          setClubs((previous) =>
            sortFunction(previous, {
              link: i,
              name: docs.data()[i].name,
              articles: docs.data()[i].articles,
            })
          );
        }
      })
      .catch((error) => {
        throw error;
      });
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
    console.log("done");
  }, [match, firestore]);

  return <RenderClub loading={loading} clubs={clubs} category={category} />;
};
export default Club;
