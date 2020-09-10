import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 100px;
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
const Form = styled.div`
  // align-content: flex-start;
`;
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

const Input = styled.input`
  background: none;
  background: white;
  border: 2px solid #d2d2d7;
  border-radius: 10px;
  outline: none;
  // padding-top: 20px;
  width: 398px;
  height: 44px;
  font-size: 1.25rem;
  display: flex;
  padding-left: 10px;
  margin-top: 20px;
  :focus {
    border: 3px solid skyblue;
    width: 396px;
    height: 40px;
    transition: all 0.3s ease;
  }
`;

export { Title, Input, SubmitButton, Form, BlueText };
