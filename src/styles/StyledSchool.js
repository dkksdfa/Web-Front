import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled.div`
  width: 90vw;
  height: 70vh;
  margin-top: 100px;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 30%;
  display: block;
  margin-bottom: 100px;
  justify-content: center;
`;
const ImageTemplate = styled.div`
  cursor: pointer;
`;

const Img = styled.div`
  width: 430px;
  height: 300px;
  margin: 0 auto;
  background: ${(props) => `url("image/${props.imagePath}")`} no-repeat;
  background-size: 100% 100%;
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
  margin: 0;
  text-align: center;

  width: 100vw;
  height: 80vh;
  text-align: left;
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  background: url("image/vegetables.jpg") no-repeat;
  background-size: cover;
  background-position: center;
`;

export {
  Background,
  Button,
  Text,
  Today,
  Container,
  Wrap,
  Box,
  ImageTemplate,
  Img,
  TextTemplate,
};
