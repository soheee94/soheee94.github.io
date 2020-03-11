import React from "react";
import styled from "styled-components";
import WorkDetailContent from "./WorkDetailContent";
import data from "../../data";
import { withRouter } from "react-router-dom";

const WorkDetail = withRouter(({ match }) => {
  const { title } = match.params;
  const workList = data.Works;
  const work = workList.filter(work => work.title === title)[0];
  const { image, introduction, assignedTasks, toolOutcome } = work;

  return (
    <div className="work-detail">
      <img src={image} alt="work image" height="30%" />
      <WorkDetailContent category="01. 소개" data={introduction} />
      <WorkDetailContent category="02. 담당업무" data={assignedTasks} />
      <WorkDetailContent category="03. 환경 및 성과" data={toolOutcome} />
    </div>
  );
});

export default WorkDetail;
