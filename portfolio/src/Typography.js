import React from "react";
import styled from "styled-components";
import media from "./utils/media";

// 1920 기준
// large title  : 46px
// title 1 : 36px
// p :22px

const TypographyBlock = styled.div`
  h1 {
    font-size: 2.5rem;
    line-height: 3.4rem;
    letter-spacing: -0.065rem;
  }
  /* h1 + p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: -0.055rem;
  } */
  h2 {
    font-size: 2rem;
    line-height: 3.25rem;
    letter-spacing: -0.035rem;
    font-weight: 700;
  }
  h1 + p {
    font-size: 1.375rem;
    line-height: 2.25rem;
    letter-spacing: -0.055rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 2.25rem;
    letter-spacing: -0.055rem;
  }
`;

function Typography({ children }) {
  return <TypographyBlock>{children}</TypographyBlock>;
}

export default Typography;
