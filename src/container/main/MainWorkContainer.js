import React from "react";
import MainWork from "../../component/main/MainWork";
import data from "../../data";

function MainWorkContainer() {
  const workList = data.Works;
  return (
    <div className="main-work-container">
      {workList.map(({ title, introduction, image }, index) => (
        <MainWork title={title} introduction={introduction[0]} image={image} key={index} />
      ))}
    </div>
  );
}

export default MainWorkContainer;
