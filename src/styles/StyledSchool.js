import styled from "styled-components";
import { StyledTitle } from "../library/styles";
import {
  ContentJustify as Template,
  ContentTemplate as Justify,
} from "./StyledPageWrap";

const FeedText = styled(StyledTitle)`
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
`;

const WhatIsProblem = styled.div`
  display: flex;
  margin: 0;
  &:nth-child(1) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;
const Box = styled.div`
  width: 30%;
  margin-top: 50px;
  &:nth-child(2) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const ImageTemplate = styled.div`
  cursor: pointer;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  background: ${(props) => `url("image/${props.imagePath}")`} no-repeat;
  background-size: 100% 100%;
`;

const TextSpan = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
  color: #0066cc;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Box,
  ImageTemplate,
  TextSpan,
  Template,
  Justify,
  WhatIsProblem,
  FeedText,
};
