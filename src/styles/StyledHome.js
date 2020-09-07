import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 1200px;
  background: #444;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-content: flex-start;
  text-align: center;
`;
const MainBanner = styled.div`
  width: 100%;
  height: 50%;
  top: 50px;
  /* margin-top: 50px; */
  background: url("image/background1.jpg") no-repeat;
  background-size: cover;
  background-position: 0 -100px;
`;
const Text = styled.p((props) => ({
  fontSize: `${props.size}rem`,
  color: "#eee",
  lineHeight: "1rem",
  fontWeight: "bold",
}));
const Button = styled.button`
  background: #cfb783;
  border: none;
  width: 20%;
  height: 12%;
  border-radius: 50px;
  color: black;
  font-size: 1.5rem;
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
const Today = styled.div`
  height: 50%;
  margin: 0;
  background: url("image/background6.jpg") no-repeat;
  background-size: 100% auto;
  background-position: 0 -400px;
`;

const TodayTitle = styled.h1`
  font-size: 3rem;
  color: #eee;
  font-weight: bold;

  margin-top: 50px;
  margin-bottom: 50px;
`;

const ClubWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ClubIntro = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 350px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");
  background-size: cover;
  color: rgb(204, 204, 204);
  &:hover {
    transform: scale(1.2);
    color: white;
    transition: 0.4s;
  }
`;

export {
  Background,
  Button,
  Text,
  Today,
  ClubIntro,
  ClubWrap,
  MainBanner,
  TodayTitle,
};
