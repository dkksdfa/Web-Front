import React from "react";
import { Box, ImageTemplate, TextSpan } from "../../styles/StyledSchool";

const Content = ({ imagePath, label, link }) => {
  return (
    <Box>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageTemplate imagePath={imagePath} />
      </a>
      <TextSpan>
        <a
          style={{
            fontFamily:
              "-apple-system BlinkMacSystemFont Segoe UI Roboto Oxygen Ubuntu Cantarell Fira Sans Droid Sans Helvetica Neue sans-serif",
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </TextSpan>
    </Box>
  );
};

export default Content;
