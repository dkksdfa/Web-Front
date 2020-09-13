import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PageWrap from "../PageWrap";
import { firestore } from "../../firebase";
import { Title, ClubWrap, ClubIntro } from "../../styles/StyledClub";

const Club = ({ match }) => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const sortFunction = useCallback((a, b) => {
    if (a.link > b.link) return 1;
    if (a.link < b.link) return -1;
    return 0;
  }, []);
  const fetchData = useCallback(() => {
    setClubs([]);
    firestore
      .collection("clubs")
      .doc("fast car")
      .get()
      .then((doc) => {
        const data = doc.data()[match.params.category];
        for (let club in data) {
          const newClub = { link: club, data: data[club] };
          setClubs((previousclubs) => {
            const next = JSON.parse(
              JSON.stringify(previousclubs.concat(newClub))
            ).sort(sortFunction);
            return next;
          });
        }
      })
      .catch((error) => {
        throw error;
      });
  }, [clubs, match]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [match, firestore]);

  return !loading ? (
    <PageWrap>
      <Title>{match.params.category} Club List</Title>
      <ClubWrap>
        {clubs.map((value, index) => {
          return (
            <Link
              to={`/club/${match.params.category}/${value.link}`}
              key={index}
            >
              <ClubIntro key={index} image={value.image}>
                {value.data.name}
              </ClubIntro>
            </Link>
          );
        })}
      </ClubWrap>
    </PageWrap>
  ) : (
    <PageWrap>
      <h1>Loading...</h1>
    </PageWrap>
  );
};

export default Club;
