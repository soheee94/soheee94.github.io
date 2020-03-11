import React from "react";
import MainWork from "../../component/main/MainWork";
import data from "../../data";

function MainWorkContainer() {
  const workList = data.Works;
  return (
    <div>
      {workList.map(({ title, introduction, image }, index) => (
        <MainWork
          title={title}
          introduction={introduction}
          image={image}
          key={index}
        />
      ))}
    </div>
  );
}

export default MainWorkContainer;
