import styled from "styled-components";
//  border: 2px solid black;
//padding: 2rem;
//border-radius: 10px;
// width: unset;
//`;
const StyledName = styled.input`
  border: 3px solid gray;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 10px;
  &:focus {
    border: 4px solid black;
    outline: none;
    transition: 0.2s ease;
  }
`;

const StyledInputName = styled.h3`
  font-size: 2.5rem;
  margin: 2rem 0 0.125rem 0;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: rgb(149, 0, 255);
  color: white;
  margin-top: 100px;
  width: 180px;
  height: 70px;
  font-size: 3rem;
  border-radius: 10px;
  padding: 5px 10px;
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
  border: 3px solid gray;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 2rem;
  font-weight: bold;
  &:focus {
    border: 4px solid black;
    outline: none;
    transition: 0.2s ease;
  }
`;

export { StyledName, StyledSelect, StyledInputName, SubmitButton, SumbitDiv };
