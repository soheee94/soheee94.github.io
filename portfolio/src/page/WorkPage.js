import React from "react";

function WorkPage({ match }) {
  const { title } = match.params;
  return <div>{title}</div>;
}

export default WorkPage;
