import React from "react";
import styled from "styled-components";
import FloatingLogo from "../common/FloatingLogo";
import { withRouter } from "react-router-dom";
import SideBarContent from "../common/SideBarContent";
import data from "../../data";

const WorkSideBar = withRouter(({ match }) => {
  const { title } = match.params;
  return (
    <>
      <FloatingLogo />
      <SideBarContent>
        <h1>{title}</h1>
      </SideBarContent>
    </>
  );
});

// const Navigation = styled.div``;

export default WorkSideBar;
