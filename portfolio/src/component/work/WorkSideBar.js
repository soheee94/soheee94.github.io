import React from "react";
import styled from "styled-components";
import FloatingLogo from "../common/FloatingLogo";
import SideBarContent from "../common/SideBarContent";
import palette from "../../utils/palette";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router-dom";
import media from "../../utils/media";

function WorkSideBar({ work, workTotalCount, prevWorkTitle, nextWorkTitle }) {
  const { idx, title, period } = work;
  const history = useHistory();
  return (
    <>
      <FloatingLogo />
      <WorkSideBarContent>
        <WorkTitle>
          <h1>{title}</h1>
          <h4>{period}</h4>
        </WorkTitle>
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
      </WorkSideBarContent>
    </>
  );
}

const WorkSideBarContent = styled(SideBarContent)`
  width: calc(100% - 10rem);
  ${media.medium} {
    width: calc(100% - 6rem);
  }
`;

const WorkTitle = styled.div`
  h1 {
    margin-bottom: 0.5rem;
    line-height: 2.25rem;
  }
  h4 {
    color: ${palette.sub};
  }
`;

const Navigation = styled.div`
  margin-top: 2rem;
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
