import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useScroll, useHeader } from "../../ScrollContext";
import media from "../../utils/media";
import palette from "../../utils/palette";

const PageTemplateBlock = styled.div`
  ${props => {
    if (props.scrollY > 3 && !props.openHeader) {
      return css`
        ${LeftBlock} {
          width: calc(6rem + 48px);
          & > div:last-of-type,
          .icons {
            visibility: hidden;
            opacity: 0;
            transition-delay: 0s;
          }
          ${media.xlarge} {
            width: calc(4rem + 48px);
          }
          ${media.medium} {
            width: 100%;
            .icons {
              visibility: visible;
              opacity: 1;
              /* transition-delay: 0s; */
            }
          }
        }

        ${RightBlock} {
          padding-left: calc(6rem + 48px);
          ${media.xlarge} {
            padding-left: calc(4rem + 48px);
          }
          ${media.medium} {
            padding: 0;
          }
        }
      `;
    }
  }}
`;

function PageTemplate({ children }) {
  const { scrollY, setScrollY } = useScroll();
  const { openHeader } = useHeader();
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return (
    <PageTemplateBlock scrollY={scrollY} openHeader={openHeader}>
      {children}
    </PageTemplateBlock>
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

  ${media.medium} {
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

  .work-detail {
    padding: 3rem;
    ${media.xlarge} {
      padding: 2rem;
    }
  }

  .main-work-container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  ${media.medium} {
    padding: 0;
  }
`;

const Right = function({ children }) {
  return <RightBlock>{children}</RightBlock>;
};

PageTemplate.Right = Right;
PageTemplate.Left = Left;

export default PageTemplate;
