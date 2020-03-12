import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/style/palette";
import media from "../../lib/style/media";

function SideBarContent({ children, className }) {
  return (
    <SideBarContentBlock className={className}>{children}</SideBarContentBlock>
  );
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
  margin-left: -1.5rem;

  ${ScrollAnimationStyles}

  ${media.xlarge} {
    margin: 0;
  }
  ${media.medium} {
    padding: 105px 2rem 40px 2rem;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
  }
`;

export default SideBarContent;
