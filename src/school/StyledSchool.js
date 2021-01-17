import styled from "styled-components";
import { StyledPageTitle } from "../common/styles";

export const FeedText = styled(StyledPageTitle)`
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
`;

export const SchoolContentWrapper = styled.div`
  display: flex;
  margin: 0;
  &:nth-child(1) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const Box = styled.div`
  width: 30%;
  margin-top: 50px;
  &:nth-child(2) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const Image = styled.div`
  cursor: pointer;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  background: ${(props) => `url("image/${props.path}")`} no-repeat;
  background-size: 100% 100%;
`;

export const TextSpan = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
  color: #0066cc;

  &:hover {
    text-decoration: underline;
  }
`;
