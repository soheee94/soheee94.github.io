import React from "react";
import styled, { css } from "styled-components";
import palette from "../../utils/palette";
import media from "../../utils/media";

function SideBarContent({ children }) {
  return <SideBarContentBlock>{children}</SideBarContentBlock>;
}

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const SideBarContentBlock = styled.div`
  color: ${palette.point};
  margin-bottom: 2rem;
  margin-left: -0.5rem;

  ${ScrollAnimationStyles}

  ${media.medium} {
    margin: 0;
    padding: 0 2rem;
  }
  ${media.small} {
    padding-top: 105px;
    padding-bottom: 40px;
    width: 100%;
    max-width: 100%;
  }
`;

export default SideBarContent;
