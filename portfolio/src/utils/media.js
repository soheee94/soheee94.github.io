export const mediaQuery = maxWidth => `
    @media (max-width : ${maxWidth}px)
`;

const media = {
  xlarge: mediaQuery(1200),
  large: mediaQuery(1024),
  medium: mediaQuery(960),
  small: mediaQuery(768),
  xsmall: mediaQuery(576),
  custom: mediaQuery
};

export default media;
