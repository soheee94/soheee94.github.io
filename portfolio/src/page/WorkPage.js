import React from "react";
import PageTemplate from "../component/common/PageTemplate";
import WorkSideBar from "../component/work/WorkSideBar";

function WorkPage() {
  return (
    <PageTemplate>
      <PageTemplate.Left>
        <WorkSideBar />
      </PageTemplate.Left>
      <PageTemplate.Right></PageTemplate.Right>
    </PageTemplate>
  );
}

export default WorkPage;
