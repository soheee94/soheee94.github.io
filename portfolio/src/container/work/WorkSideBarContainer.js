import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../data";
import WorkSideBar from "../../component/work/WorkSideBar";

const WorkSideBarContainer = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const workTotalCount = Object.keys(workList).length;
  const work = workList.filter(work => work.title === title)[0];
  const { idx } = work;
  const prevWorkTitle =
    idx > 1 && workList.filter(work => work.idx === idx - 1)[0].title;
  const nextWorkTitle =
    idx < workTotalCount &&
    workList.filter(work => work.idx === idx + 1)[0].title;

  return (
    <WorkSideBar
      work={work}
      workTotalCount={workTotalCount}
      prevWorkTitle={prevWorkTitle}
      nextWorkTitle={nextWorkTitle}
    />
  );
});

export default WorkSideBarContainer;
