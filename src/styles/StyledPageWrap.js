import styled from "styled-components";

const ContentTemplate = styled.div`
  width: 100%;
  /* padding-top: 3%; */
  /* height: 100vh; */
  margin: 0 auto;
  background: mintcream;
  @media only screen and (min-height: 101vh) {
    height: 100%;
  }
`;

const ContentJustify = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export { ContentJustify, ContentTemplate };
