import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../data";
import WorkDetail from "../../component/work/WorkDetail";

const WorkDetailContainer = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const work = workList.filter(work => work.title === title)[0];
  const { image, introduction, assignedTasks, toolOutcome } = work;

  return (
    <div className="work-detail">
      <img
        src={`http://soheee94.dothome.co.kr/image/${image}`}
        alt="work"
        height="30%"
        width="100%"
      />
      <WorkDetail category="01. 소개" data={introduction} />
      <WorkDetail category="02. 담당업무" data={assignedTasks} />
      <WorkDetail category="03. 환경 및 성과" data={toolOutcome} />
    </div>
  );
});

export default WorkDetailContainer;
