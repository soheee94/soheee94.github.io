import React from "react";
import MainSideBar from "../component/main/MainSideBar";
import MainWorkContainer from "../container/main/MainWorkContainer";
import PageTemplate from "../component/common/PageTemplate";

function MainPage() {
  return (
    <PageTemplate>
      <PageTemplate.Left>
        <MainSideBar />
      </PageTemplate.Left>
      <PageTemplate.Right>
        <MainWorkContainer />
      </PageTemplate.Right>
    </PageTemplate>
  );
}

export default MainPage;
