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
  display: flex;
  height: 60vh;
  align-items: flex-start;
  /* justify-content: space-around; */
  flex-direction: column;

  font-family: snas-serif;
  /* width: 410px; */
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
  /* display: flex; */
  /* font-size: 1.2rem; */
  background: white;
  outline: none;
  padding-top: 20px;
  /* width: 396px; */
  width: 100%;
  height: 100%;
  /* padding: 14px 0 4px; */
  /* padding-left: 10px; */
  /* border: 2px solid #d2d2d7;
  border-radius: 10px; */
  border: none;
  /* &:focus {
    border: 4px solid skyblue;
    transition: 0.2s ease;
  } */
  :focus + .label-name::after,
  :valid + .label-name::after {
    transform: translateX(0%);
  }
  :focus + .label-name .content-name,
  :valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
`;
const InputWrap = styled.div`
  width: 410px;
  position: relative;
  /* height: 44.4px; */
  height: 50px;
  margin-bottom: 15px;
`;
const Label = styled.label`
  /* background: yellow; */
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    border-bottom: 3px solid #5fa8d3;
    left: 0px;
    bottom: -1px;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
  }
`;
const Span = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease;
`;

export { Title, Input, SubmitButton, Form, BlueText, InputWrap, Label, Span };
