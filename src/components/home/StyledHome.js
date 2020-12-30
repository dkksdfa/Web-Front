import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const MainBanner = styled.div`
  width: 100%;
  height: 50%;
  top: 50px;
  background: url("image/background6.jpg") no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Text = styled.p((props) => ({
  fontSize: `${props.size}rem`,
  // fontWeight: "300",
  marginTop: `${props.margin && "200px"}`,
  color: "#eee",
  lineHeight: "1rem",
}));
export const IntroductionButton = styled.button`
  background: #cfb783;
  border: none;
  width: 20%;
  height: 12%;
  cursor: pointer;
  border-radius: 50px;
  color: black;
  font-size: 2rem;
  margin-top: 4rem;

  font-weight: 600;
  &:hover {
    background: #e2d4b5;
    transition: 0.3s ease;
  }
  &:focus {
    outline: none;
  }
`;
export const Today = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: url("image/background5.jpg") no-repeat;

  background-size: cover;
  background-position: center;
`;

export const TodayTitle = styled.h1`
  font-size: 5rem;
  color: #eee;
  font-weight: bold;

  margin-top: 100px;
  margin-bottom: 50px;
`;

export const ClubWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ClubIntro = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 350px;
  background: ${(props) => `url(/image/clubbackground/${props.image}.png)`};
  background-size: cover;
  color: rgb(204, 204, 204);
  &:hover {
    transform: scale(1.2);
    color: white;
    transition: 0.4s;
  }
`;
