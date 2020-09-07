import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 100px;
`;
const Input = styled.input`
  border: 2px solid #d2d2d7;
  /* border: none; */
  border-radius: 10px;
  display: flex;
  font-size: 1rem;
  background: white;
  margin-bottom: 15px;
  width: 396px;
  padding: 20px 0;
  padding-left: 10px;

  &:focus {
    border: 4px solid skyblue;
    outline: none;
  }
`;
const SubmitButton = styled.button`
  width: 410px;
  background: #0071e3;
  color: white;
  margin-top: 50px;
  padding: 20px 0;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #0077ed;
  }
`;
const Form = styled.form``;
const BlueText = styled.div`
  width: max-content;
  margin: 0;
  color: #0066cc;
  cursor: pointer;
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -0.022em;
  margin-top: 7px;

  &:hover {
    text-decoration: underline;
  }
`;

export { Title, Input, SubmitButton, Form, BlueText };
