import React, { useEffect, useState, useCallback } from "react";

import { firestore } from "../../firebase";
import { sortByLink } from "../../library/functions.js";
import RenderClub from "./RenderClub";
const Club = ({ match }) => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = match.params.category;
  const fetchData = useCallback(() => {
    setLoading(true);
    setClubs([]);
    firestore
      .collection("clubs")
      .doc("fast car")
      .get()
      .then((doc) => {
        const data = doc.data()[category];
        for (let club in data) {
          const newClub = { link: club, data: data[club] };
          setClubs((previousclubs) => {
            const next = JSON.parse(
              JSON.stringify(previousclubs.concat(newClub))
            ).sort(sortByLink);
            return next;
          });
        }
      })
      .catch((error) => {
        throw error;
      });
    setLoading(false);
  }, [clubs, match]);
  useEffect(() => {
    fetchData();
  }, [match, firestore]);
  return <RenderClub loading={loading} clubs={clubs} category={category} />;
};
export default Club;
