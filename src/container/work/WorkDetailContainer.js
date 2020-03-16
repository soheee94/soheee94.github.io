import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../data";
import WorkDetail from "../../component/work/WorkDetail";

const WorkDetailContainer = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const work = workList.filter(work => work.title === title)[0];
  const { introduction, assignedTasks, toolOutcome, images } = work;

  return (
    <div className="work-detail-container">
      <WorkDetail category="01. 소개" data={introduction} />
      <WorkDetail category="02. 담당업무" data={assignedTasks} />
      <WorkDetail category="03. 환경 및 성과" data={toolOutcome} />
      <WorkDetail category="04. 실행 화면" data={images} image />
    </div>
  );
});

export default WorkDetailContainer;
