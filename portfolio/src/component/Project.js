import React from "react";
import styled from "styled-components";

const ProjectBlock = styled.div`
  width: 50%;
  height: 500px;
  padding: 10px;
`;

const InsideBlock = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* &:hover {
    background: red;
  } */
`;

function Project() {
  return (
    <ProjectBlock>
      <InsideBlock />
    </ProjectBlock>
  );
}

export default Project;
