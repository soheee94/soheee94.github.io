import React, { useState, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import Project from "./Project";
import media from "../utils/media";

const FullGrid = styled.div`
  width: 100%;
  padding-left: 33.33%;
  position: relative;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;

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
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <FullGrid scrollY={scrollY}>
      <GridBlock>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </GridBlock>
    </FullGrid>
  );
}

export default ProjectGrid;
