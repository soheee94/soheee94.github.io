import React from "react";
import Header from "./component/Header";
import ProjectGrid from "./component/ProjectGrid";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "#333",
  point: "orange"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProjectGrid />
    </ThemeProvider>
  );
}

export default App;
