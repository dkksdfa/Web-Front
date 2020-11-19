import styled from "styled-components";

const ContentTemplate = styled.div`
  margin: 1rem 2rem;
  @media only screen and (min-height: 101vh) {
    height: 100%;
    margin: 0 auto;
  }
`;

const Input = styled.input`
  border: 4px solid gray;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 10px;
  outline: none;
  color: gray;
  &:focus {
    border: 4px solid black;
    transition: 0.5s ease;
    color: black;
  }
`;

const ContentJustify = styled.div`
  width: 90%;
  margin: 2vh auto;
  /* background: mintcream; */
  background: white;
  border-radius: 10px;
  border: 2px solid #d7d9d9;
`;
const StyledTitle = styled.h1`
  font-weight: bolder;
  font-size: 5rem;
  margin: 0;
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.backgroundColor || "black"};
  color: white;
  width: 180px;
  height: 70px;
  font-size: 3rem;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  &:hover {
    transition: 0.2s ease;
    background: ${(props) => props.hoverColor || "gray"};
  }
`;

export { ContentJustify, ContentTemplate, StyledTitle, Input, Button };
