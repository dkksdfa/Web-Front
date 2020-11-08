import React from "react";
import {
  Box,
  ImageTemplate,
  Img,
  TextTemplate,
} from "../../styles/StyledSchool";

const Content = ({ imagePath, label, link }) => {
  return (
    <Box>
      <ImageTemplate href={link} target="_blank" rel="noopener noreferrer">
        <Img imagePath={imagePath} />
      </ImageTemplate>

      <TextTemplate>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </TextTemplate>
    </Box>
  );
};

export default Content;
