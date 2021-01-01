import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const IntroductionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 50px;
  background: url("image/background6.jpg") no-repeat;
  background-size: cover;
  background-position: center;
`;

export const IntroductionText = styled.p((props) => ({
  fontSize: `${props.size}rem`,
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
