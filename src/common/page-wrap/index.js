import React from "react";
import { ContentJustify, ContentTemplate } from "./StyledPageWrap";

const PageWrap = ({ children }) => {
  return (
    <ContentJustify>
      <ContentTemplate>{children}</ContentTemplate>
    </ContentJustify>
  );
};

export default PageWrap;
