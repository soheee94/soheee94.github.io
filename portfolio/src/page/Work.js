import React from "react";

function Work({ match }) {
  const { title } = match.params;
  return <div>{title}</div>;
}

export default Work;
