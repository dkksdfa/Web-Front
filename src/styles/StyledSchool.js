import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled.div`
  width: 80vw;
  margin-top: 100px;
`;
const MainBanner = styled.div`
  width: 100%;
  height: 33.3%;
  top: 50px;
  background-color: white;
`;
const Container = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;
const Box = styled.div`
  border: 1px solid black;
`;
const ImageTemplate = styled.div``;
const Img = styled.img`
  width: 400px;
  height: 220px;
  object-fit: cover;
`;
const Text = styled.p((props) => ({
  fontSize: `${props.size}rem`,
  marginTop: `${props.margin && "200px"}`,
  color: "#eee",
  lineHeight: "1rem",
  fontWeight: "bold",
}));
const Button = styled.button`
  background: #cfb783;
  border: none;
  width: 20%;
  height: 12%;
  cursor: pointer;
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
  height: 33.3%;
  margin: 0;
  background: url("image/background5.jpg") no-repeat;

  background-size: cover;
  background-position: center;
`;

const TodayTitle = styled.h1`
  font-size: 5rem;
  color: #eee;
  font-weight: bold;

  margin-top: 100px;
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
  Container,
  TodayTitle,
  MainBanner,
  Wrap,
  Box,
  ImageTemplate,
  Img,
};
