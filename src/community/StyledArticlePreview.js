import styled from "styled-components";

export const Body = styled.article`
  background: white;
  border: 0.4px solid #aaa;
  border-radius: 10px;
  margin-top: 20px;
  transition: 0.2s ease;
  :hover {
    border: 0.4px solid black;
  }
`;

export const Inner = styled.div`
  margin-left: 14px;
  margin-top: 5px;
  margin-bottom: 7px;
`;

export const Writer = styled.span`
  font-size: 12px;
  background: #bbb;
  padding: 2px 4px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.17em;
  margin-top: 10px;
`;

export const Info = styled.span`
  color: gray;
  font-size: 12px;
  margin-left: 7px;
`;

export const Comment = styled.div`
  :hover {
    background: #dae0e6;
  }
  margin-top: 40px;
  padding: 0 3px;
  color: #8c8a8c;
  font-weight: 600;
  font-size: 12px;
  width: max-content;
`;
