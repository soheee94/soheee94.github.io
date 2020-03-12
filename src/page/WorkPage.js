import React from "react";
import PageTemplate from "../component/common/PageTemplate";
import WorkSideBarContainer from "../container/work/WorkSideBarContainer";
import WorkDetailContainer from "../container/work/WorkDetailContainer";

function WorkPage() {
  return (
    <PageTemplate>
      <PageTemplate.Left>
        <WorkSideBarContainer />
      </PageTemplate.Left>
      <PageTemplate.Right>
        <WorkDetailContainer />
      </PageTemplate.Right>
    </PageTemplate>
  );
}

export default WorkPage;
