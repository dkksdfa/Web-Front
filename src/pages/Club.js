import React, { useEffect, useState, useCallback } from "react";
import values from "../values.js";
import { Link } from "react-router-dom";
import PageWrap from "./PageWrap";
import { firestore } from "../firebase";

import { Title, ClubWrap, ClubIntro } from "../styles/StyledClub";

const Club = ({ match }) => {
  let category = values.clubs[match.params.category];

  const [clubs, setClubs] = useState([]);
  const fetchData = useCallback(() => {
    setClubs([]);
    firestore
      .collection("clubs")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data()[match.params.category];
          for (let club in data) {
            const newClub = { name: club, data: data[club] };
            console.log("aaa", newClub);
            setClubs((previousclubs) => previousclubs.concat(newClub));
          }
        });
      });
  }, [clubs, match]);

  useEffect(() => {
    fetchData();
  }, [match, firestore]);
  return (
    <PageWrap>
      <Title>{match.params.category} Club List</Title>
      <ClubWrap>
        {category ? (
          clubs.map((value, index) => {
            return (
              <Link
                to={`/r/${match.params.category}/${value.data.link}`}
                key={index}
              >
                <ClubIntro key={index} image={value.image}>
                  {value.name}
                </ClubIntro>
              </Link>
            );
          })
        ) : (
          <h1>
            <Link to="/">This url is wrong. Click to go to home.</Link>
          </h1>
        )}
      </ClubWrap>
    </PageWrap>
  );
};

export default Club;
