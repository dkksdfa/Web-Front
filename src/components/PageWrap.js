import React from "react";
import { ContentJustify, ContentTemplate } from "../styles/StyledPageWrap";

const PageWrap = ({ children }) => {
  return (
    <ContentTemplate>
      <ContentJustify>{children}</ContentJustify>
    </ContentTemplate>
  );
};

export default PageWrap;
