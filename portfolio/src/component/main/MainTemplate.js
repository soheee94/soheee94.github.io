import React from "react";
import styled, { css } from "styled-components";
import { useScroll, useHeader } from "../../ScrollContext";
import media from "../../utils/media";
import palette from "../../utils/palette";

const MainTemplateBlock = styled.div`
  ${props => {
    if (props.scrollY > 3 && !props.openHeader) {
      return css`
        ${LeftBlock} {
          width: calc(6rem + 48px);
          ${media.medium} {
            width: calc(4rem + 48px);
          }
          ${media.small} {
            width: 100%;
          }
          & > div:last-of-type {
            visibility: hidden;
            opacity: 0;
            transition-delay: 0s;
          }
        }

        ${RightBlock} {
          padding-left: calc(6rem + 48px);
          ${media.medium} {
            padding-left: calc(4rem + 48px);
          }
          ${media.small} {
            padding: 0;
          }
        }
      `;
    }
  }}
`;

function MainTemplate({ children }) {
  const { scrollY } = useScroll();
  const { openHeader } = useHeader();
  return (
    <MainTemplateBlock scrollY={scrollY} openHeader={openHeader}>
      {children}
    </MainTemplateBlock>
  );
}

const LeftBlock = styled.div`
  background: ${palette.main};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  ${media.small} {
    justify-content: flex-start;
    width: 100%;
    position: relative;
    padding: 0;
  }
`;

const Left = function({ children }) {
  const { setOpenHeader } = useHeader();
  return (
    <LeftBlock
      onMouseOver={() => {
        setOpenHeader(true);
      }}
      onMouseLeave={() => {
        setOpenHeader(false);
      }}
    >
      {children}
    </LeftBlock>
  );
};

const RightBlock = styled.div`
  width: 100%;
  padding-left: 33.33%;
  position: relative;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  background: #fafafa;
  display: flex;
  flex-wrap: wrap;

  ${media.small} {
    padding: 0;
  }
`;

const Right = function({ children }) {
  return <RightBlock>{children}</RightBlock>;
};

MainTemplate.Right = Right;
MainTemplate.Left = Left;

export default MainTemplate;
