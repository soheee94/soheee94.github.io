import React from "react";
import styled from "styled-components";
import FloatingLogo from "../common/FloatingLogo";
import { withRouter } from "react-router-dom";
import SideBarContent from "../common/SideBarContent";
import data from "../../data";
import palette from "../../utils/palette";

const WorkSideBar = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const workTotalCount = Object.keys(workList).length;
  const work = workList.filter(work => work.title === title);
  const { period } = work[0].details;
  const { idx } = work[0];
  return (
    <>
      <FloatingLogo />
      <SideBarContent>
        <h4>
          {idx}/{workTotalCount}
        </h4>
        <h1>{title}</h1>
        <Period>{period}</Period>
        <Navigation>
          <NavButton>Prev</NavButton>
          <NavButton>Next</NavButton>
        </Navigation>
      </SideBarContent>
    </>
  );
});
const Period = styled.h4`
  color: ${palette.sub};
`;
const Navigation = styled.div``;

const NavButton = styled.button``;

export default WorkSideBar;
