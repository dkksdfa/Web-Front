import styled from "styled-components";
import { Button } from "../common/styles";
//  border: 2px solid black;
//padding: 2rem;
//border-radius: 10px;
// width: unset;
//`;
const StyledName = styled.input`
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

const StyledInputName = styled.h3`
  font-size: 2.5rem;
  color: gray;
  margin: 2rem 0 0.125rem 0;
`;

const SubmitButton = styled(Button)`
  background-color: rgb(149, 0, 255);
  margin-top: 100px;
  &:hover {
    transition: 0.2s ease;
    background: rgb(106, 0, 182);
  }
`;
const SumbitDiv = styled.div`
  display: table-cell;
  width: 90vw;
  text-align: right;
`;

const StyledSelect = styled.select`
  border: 4px solid gray;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
  &:focus {
    border: 4px solid black;
    transition: 0.5s ease;
    color: black;
  }
`;

export { StyledName, StyledSelect, StyledInputName, SubmitButton, SumbitDiv };
