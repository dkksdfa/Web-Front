import React from "react";
// import { ContentJustify, ContentTemplate } from "../styles/StyledPageWrap";

const PageWrap = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default PageWrap;
