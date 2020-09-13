import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled.div`
  width: 90vw;
  margin-top: 100px;
  padding: 0;
`;
const MainBanner = styled.div`
  overflow: hidden;
  height: 500px;
  margin-bottom: 5rem;
`;
const Slide = styled.ul`
  margin: 0;
  height: 100%;
  width: calc(100% * 3);
  border: 1px solid black;
  padding: 0;
  display: flex;
  animation: slide 8s infinite;
  @keyframes slide {
    0% {
      margin-left: 0;
    } /* 0 ~ 10  : 정지 */
    10% {
      margin-left: 0;
    } /* 10 ~ 25 : 변이 */
    25% {
      margin-left: -100%;
    } /* 25 ~ 35 : 정지 */
    35% {
      margin-left: -100%;
    } /* 35 ~ 50 : 변이 */
    50% {
      margin-left: -100%;
    }
    60% {
      margin-left: -200%;
    }
    75% {
      margin-left: -200%;
    }
    85% {
      margin-left: -200%;
    }
    100% {
      margin-left: 0;
    }
  }
`;
const Item = styled.li`
  width: calc(100% / 3);
  height: 100%;
  background-color: black;
  display: inline-block;
  color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 30%;
`;
const ImageTemplate = styled.div`
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const TextTemplate = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
  color: #0066cc;
  &:hover {
    text-decoration: underline;
  }
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
  height: 500px;
  margin: 0;
  text-align: center;
  background: url("image/Restaurant.png") no-repeat;
  background-size: 500px;
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
  TextTemplate,
  Item,
  Slide,
};
