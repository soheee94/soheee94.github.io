import React from "react";
import styled from "styled-components";
import FloatingLogo from "../common/FloatingLogo";
import SideBarContent from "../common/SideBarContent";
import palette from "../../lib/style/palette";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from "react-router-dom";
import media from "../../lib/style/media";
import RoundButton from "../common/RoundButton";

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
          <RoundButton
            disabled={idx === 1}
            onClick={() => history.push(`/work/${prevWorkTitle}`)}
          >
            <MdKeyboardArrowLeft />
          </RoundButton>
          <h4>
            {idx} / {workTotalCount}
          </h4>
          <RoundButton
            disabled={idx === workTotalCount}
            onClick={() => history.push(`/work/${nextWorkTitle}`)}
          >
            <MdKeyboardArrowRight />
          </RoundButton>
        </Navigation>
      </WorkSideBarContent>
    </>
  );
}

const WorkSideBarContent = styled(SideBarContent)`
  width: calc(100% - 10rem);
  ${media.xlarge} {
    width: calc(100% - 8rem);
  }
  ${media.medium} {
    width: 100%;
  }
`;

const WorkTitle = styled.div`
  h1 {
    margin-bottom: 0.5rem;
    line-height: 2rem;
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

export default WorkSideBar;
