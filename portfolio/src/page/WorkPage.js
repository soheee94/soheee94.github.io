import React from "react";
import PageTemplate from "../component/common/PageTemplate";
import WorkSideBarContainer from "../container/work/WorkSideBarContainer";
import WorkDetail from "../component/work/WorkDetail";

function WorkPage() {
  return (
    <PageTemplate>
      <PageTemplate.Left>
        <WorkSideBarContainer />
      </PageTemplate.Left>
      <PageTemplate.Right>
        <WorkDetail />
      </PageTemplate.Right>
    </PageTemplate>
  );
}

export default WorkPage;
