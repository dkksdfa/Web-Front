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
    firestore
      .collection("clubs")
      .doc(category)
      .get()
      .then((doc) => {
        setClubs([]);
        const data = doc.data();
        for (let club in data) {
          const newClub = { link: club, data: data[club] };

          setClubs((previousclubs) => {
            const next = sortFunction(previousclubs, newClub);
            return next;
          });
        }
      })
      .catch((error) => {
        throw error;
      });
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, [match, firestore]);

  return <RenderClub loading={loading} clubs={clubs} category={category} />;
};

export default Club;
