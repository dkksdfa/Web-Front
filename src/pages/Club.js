import React from "react";
import values from "../values.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Background = styled.div`
  width: 100%;
  height: 1100px;
  background: #444;
  display: flex;
  /* align-self: flex-end; */
`;
const ContentTemplate = styled.div`
  width: 90%;
  padding-top: 100px;
  height: unset;
  margin: 0 auto;
  background: mintcream;
`;

const ContentJustify = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const ListTemplate = styled.div`
  /* background: green; */
`;
const Title = styled.div`
  color: black;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ClubWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;
const ClubIntro = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 350px;
  background: brown;
  &:hover {
    background: green;
    color: white;
    transition: 0.4s;
  }
`;

const Clubs = ({ match }) => {
  let result = values.clubs[match.params.id];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Background>
      <ContentTemplate>
        <ContentJustify>
          <ListTemplate>
            <Title>{match.params.id} Club List</Title>
            <ClubWrapper>
              {result ? (
                result.map((value, index) => {
                  return (
                    <Link to={`/community/${value}`}>
                      <ClubIntro key={index}>{value}</ClubIntro>
                    </Link>
                  );
                })
              ) : (
                <h1>hello</h1>
              )}
            </ClubWrapper>
          </ListTemplate>
        </ContentJustify>
      </ContentTemplate>
    </Background>
  );
};

export default Clubs;
