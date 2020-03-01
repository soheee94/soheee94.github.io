export const mediaQuery = maxWidth => `
    @media (max-width : ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(768),
  small: mediaQuery(640),
  xsmall: mediaQuery(375),
  custom: mediaQuery
};

export default media;
