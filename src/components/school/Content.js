import React from "react";
// import {
//   Box,
//   ImageTemplate,
//   Img,
//   TextTemplate,
// } from "../../styles/StyledSchool";

const Content = ({ imagePath, label, link }) => {
  return (
    <div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* <Img imagePath={imagePath} /> */}
        </a>
      </div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </div>
    </div>
  );
};

export default Content;
