import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../data";
import WorkSideBar from "../../component/work/WorkSideBar";

const WorkSideBarContainer = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const work = workList.filter((work) => work.title === title)[0];

  const workTotalCount = Object.keys(workList).length;
  const index = workList.findIndex((work) => work.title === title);
  const prevWorkTitle = index > 0 && workList[index - 1].title;
  const nextWorkTitle = index < workTotalCount - 1 && workList[index + 1].title;

  return (
    <WorkSideBar
      work={work}
      index={index}
      workTotalCount={workTotalCount}
      prevWorkTitle={prevWorkTitle}
      nextWorkTitle={nextWorkTitle}
    />
  );
});

export default WorkSideBarContainer;
