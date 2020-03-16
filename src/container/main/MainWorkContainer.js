import React from "react";
import MainWork from "../../component/main/MainWork";
import data from "../../data";

function MainWorkContainer() {
  const workList = data.Works;
  return (
    <div className="main-work-container">
      {workList.map(({ title, introduction, thumbnail }, index) => (
        <MainWork title={title} introduction={introduction[0]} thumbnail={thumbnail} key={index} />
      ))}
    </div>
  );
}

export default MainWorkContainer;
