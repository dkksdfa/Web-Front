import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: white;
  width: 180px;
  height: 70px;
  font-size: 3rem;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  &:hover {
    transition: 0.2s ease;
    background: ${(props) => props.theme.hoverColor};
  }
`;

Button.defaultProps = {
  theme: {
    backgroundColor: "black",
    hoverColor: "gray",
  },
};

export const Input = styled.input`
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

export const StyledPageTitle = styled.h1`
  font-weight: bolder;
  font-size: 5rem;
  margin: 0;
`;

export const InputTitle = styled.h3`
  font-size: 2.5rem;
  color: gray;
  margin: 2rem 0 0.125rem 0;
`;
