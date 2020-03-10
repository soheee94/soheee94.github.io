import React from "react";
import MainWork from "../../component/main/MainWork";
import data from "../../data";

function MainWorkContainer() {
  const workList = data.Works;
  return (
    <>
      {workList.map(({ title, summary, image }, index) => (
        <MainWork title={title} summary={summary} image={image} key={index} />
      ))}
    </>
  );
}

export default MainWorkContainer;
