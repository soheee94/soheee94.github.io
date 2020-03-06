import React, { useState, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import Project from "./Project";
import media from "../utils/media";
import { useScroll, useHeader } from "../ScrollContext";

const FullGrid = styled.div`
  width: 100%;
  padding-left: 33.33%;
  position: relative;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;

  ${props =>
    props.scrollY > 3 &&
    !props.openHeader &&
    css`
      padding-left: 176px;
    `}

  ${media.medium} {
    padding: 0;
  }
`;

const GridBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

function ProjectGrid() {
  const { scrollY } = useScroll();
  const { openHeader } = useHeader();

  return (
    <FullGrid scrollY={scrollY} openHeader={openHeader}>
      <GridBlock>
        <Project title="테스트" description="나는야 테스트 설명" />
        <Project title="테스트" description="나는야 테스트 설명" />
        <Project title="테스트" description="나는야 테스트 설명" />
        <Project title="테스트" description="나는야 테스트 설명" />
        <Project title="테스트" description="나는야 테스트 설명" />
      </GridBlock>
    </FullGrid>
  );
}

export default ProjectGrid;
