import React from "react";
import PageTemplate from "../component/common/PageTemplate";
import WorkSideBar from "../component/work/WorkSideBar";
import WorkSideBarContainer from "../container/work/WorkSideBarContainer";

function WorkPage() {
  return (
    <PageTemplate>
      <PageTemplate.Left>
        <WorkSideBarContainer />
      </PageTemplate.Left>
      <PageTemplate.Right>{/* WorkDetail */}</PageTemplate.Right>
    </PageTemplate>
  );
}

export default WorkPage;
