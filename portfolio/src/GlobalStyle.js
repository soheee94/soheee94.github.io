import { createGlobalStyle } from "styled-components";
import media from "./utils/media";

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 2rem;
    line-height: 2.875rem;
    letter-spacing: -0.0625rem;
    margin-bottom: 1.125rem;

    ${media.xlarge} {
      font-size: 1.6875rem;
      line-height: 2.5rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.625rem;
    letter-spacing: -0.025rem;
    font-weight: 700;
    ${media.xlarge} {
      font-size: 1.25rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.05rem;
    ${media.xlarge} {
      font-size: 0.875rem;
    }
  }
  h1 + p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -0.05rem;
    ${media.xlarge} {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export default GlobalStyle;
