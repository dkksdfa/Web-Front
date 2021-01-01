import styled from "styled-components";

export const ArticleTitle = styled.h3`
  font-size: 4rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const SubInfoDiv = styled.div`
  margin-bottom: 2rem;
  & > * {
    margin-left: 0.5rem;
  }
  & > *:first-child {
    margin-left: 0px;
  }
`;

export const ArticleCreatorName = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  font-weight: bold;
`;

export const ArticleSubInfo = styled.span`
  color: gray;
  font-size: 1.75rem;
`;

export const ArticleContent = styled.div`
  font-size: 1.5rem;
`;
