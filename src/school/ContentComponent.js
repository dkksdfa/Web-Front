import React from "react";
import { Box, Image, TextSpan } from "./StyledSchool";
import constants from "./constants.json";

const ContentComponent = ({ imagePath, label, link }) => (
  <Box>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image path={imagePath} />
    </a>
    <TextSpan>
      <a
        style={{ fontFamily: constants.CONTENT_TEXT_FONT }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </TextSpan>
  </Box>
);

export default ContentComponent;
