import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 1100px;
  background: #444;
  display: flex;
`;
const ContentTemplate = styled.div`
  width: 90%;
  padding-top: 100px;
  height: unset;
  margin: 0 auto;
  background: mintcream;
`;

const ContentJustify = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PageWrap = ({ children }) => {
  return (
    <Background>
      <ContentTemplate>
        <ContentJustify>{children}</ContentJustify>
      </ContentTemplate>
    </Background>
  );
};

export default PageWrap;
