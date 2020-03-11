import React from "react";
import styled from "styled-components";
import FloatingLogo from "../common/FloatingLogo";
import { withRouter } from "react-router-dom";
import SideBarContent from "../common/SideBarContent";
import data from "../../data";
import palette from "../../utils/palette";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router-dom";

const WorkSideBar = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const workTotalCount = Object.keys(workList).length;
  const work = workList.filter(work => work.title === title);
  const { period } = work[0].details;
  const { idx } = work[0];
  const history = useHistory();
  const prevWorkTitle = idx > 1 && workList.filter(work => work.idx === idx - 1)[0].title;
  const nextWorkTitle =
    idx < workTotalCount && workList.filter(work => work.idx === idx + 1)[0].title;
  return (
    <>
      <FloatingLogo />
      <SideBarContent>
        <Navigation>
          <NavButton onClick={() => history.push(`/work/${prevWorkTitle}`)}>
            <MdKeyboardArrowLeft />
          </NavButton>
          <h4>
            {idx} / {workTotalCount}
          </h4>
          <NavButton onClick={() => history.push(`/work/${nextWorkTitle}`)}>
            <MdKeyboardArrowRight />
          </NavButton>
        </Navigation>
        <WorkTitle>
          <h1>{title}</h1>
          <h4>{period}</h4>
        </WorkTitle>
      </SideBarContent>
    </>
  );
});

const WorkTitle = styled.div`
  min-width: 250px;
  h1 {
    margin-bottom: 0;
  }
  h4 {
    color: ${palette.sub};
  }
`;

const Navigation = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  h4 {
    display: inline;
  }
`;

const NavButton = styled.button`
  vertical-align: middle;
  background: none;
  border: 2px solid ${palette.point};
  outline: none;
  word-break: keep-all;
  cursor: pointer;
  color: ${palette.point};
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1.6rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0;
  transition: all 0.2s ease;
  &:first-of-type {
    margin-right: 0.5rem;
  }
  &:last-of-type {
    margin-left: 0.5rem;
  }

  &:hover {
    background: ${palette.point};
    color: white;
  }
`;

export default WorkSideBar;
