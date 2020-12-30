import styled from "styled-components";

const Back = styled.div`
  text-align: center;
  display: block;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 700;
  color: white;
  font-size: 3rem;
  margin-bottom: 100px;
`;
const Input = styled.input`
  border: 2px solid #d2d2d7;
  border-radius: 10px;
  display: flex;
  font-size: 1.2rem;
  background: white;
  margin-bottom: 15px;
  width: 396px;
  padding: 14px 0 4px;
  padding-left: 10px;
  &:focus {
    border: 4px solid skyblue;
    outline: none;
    transition: 0.2s ease;
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
    transition: 0.2s ease;
    background: #0077ed;
  }
`;
const Form = styled.div`
  width: 410px;
  margin: 0 auto;
`;
const TitleWrap = styled.div`
  background: url("image/background7.jpg") no-repeat;
  background-position: 0 -400px;
  background-size: 100% auto;
  width: 100%;
  height: 150px;
  margin-bottom: 50px;
  line-height: 150px;
`;
const TitleBlur = styled.div`
  backdrop-filter: blur(5px);
  height: inherit;
`;

const Description = styled.div`
  color: #444;
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
`;
export {
  Title,
  Input,
  SubmitButton,
  Form,
  TitleWrap,
  Back,
  TitleBlur,
  Description,
};
