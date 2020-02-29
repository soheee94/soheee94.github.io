import React from "react";
import styled from "styled-components";
import Project from "./Project";

const FullGrid = styled.div`
  width: 100%;

  padding-left: 33.33%;
  position: relative;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
`;

const GridBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

function ProjectGrid() {
  return (
    <FullGrid>
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
