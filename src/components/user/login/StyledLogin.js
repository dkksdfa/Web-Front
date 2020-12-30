import styled from "styled-components";
import { Button } from "../../../common/styles";

// const Image = styled.img`
//   width: 16px;
//   height: 16px;
//   padding: 0;
//   margin: 0 5px;
//   vertical-align: middle;
// `;
// const SubmitButton = styled.button`
//   width: 410px;
//   height: 50px;
//   box-shadow: ${(props) =>
//     props.isGoogle
//       ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
//       : "none"};
//   background: ${(props) => (props.isGoogle ? "gray" : "#0071e3")};
//   color: white;
//   margin-top: 10px;
//   font-size: 1rem;
//   border: none;
//   border-radius: 10px;

//   &:hover {
//     background: ${(props) => (props.isGoogle ? "#888" : "#0077ed")};
//   }
// `;
// const Form = styled.form`
//   align-content: flex-start;
//   width: 410px;
// `;
// const MarginBetweenInputAndButton = styled.div`
//   margin-bottom: 70px;
// `;
// const BlueText = styled.div`
//   width: max-content;
//   margin: 0;
//   color: #0066cc;
//   cursor: pointer;
//   font-size: 17px;
//   line-height: 1.47059;
//   font-weight: 400;
//   letter-spacing: -0.022em;
//   margin-top: 7px;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Input = styled.input`
//   background: none;
//   background: white;
//   border: 2px solid #d2d2d7;
//   border-radius: 10px;
//   outline: none;
//   width: 398px;
//   height: 44px;
//   font-size: 1.25rem;
//   display: flex;
//   padding-left: 10px;
//   margin-top: 10px;
//   :focus {
//     border: 3px solid skyblue;
//     width: 396px;
//     height: 40px;
//     transition: all 0.3s ease;
//   }
// `;

// export {
//   Input,
//   SubmitButton,
//   Form,
//   BlueText,
//   Image,
//   MarginBetweenInputAndButton,
// };

export const LoginButton = styled(Button)`
  background: hotpink;
  &:hover {
    background: pink;
  }
`;

export const GoogleButton = styled(Button)`
  background: rgb(170, 170, 170);

  &:hover {
    background: rgb(201, 201, 201);
  }
`;

export const JoinButton = styled(Button)`
  background: skyblue;
  margin: 0 10px;
  &:hover {
    background: rgb(177, 228, 248);
  }
`;
