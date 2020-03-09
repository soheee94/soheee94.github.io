import React, { useLayoutEffect } from "react";
import Header from "./component/Header";
import ProjectGrid from "./component/ProjectGrid";
import { ThemeProvider } from "styled-components";
import { useScroll } from "./ScrollContext";
import Typography from "./Typography";

const theme = {
  main: "#f2d1a8",
  point: "#202ba2",
  white: "#fff",
  palette: {
    main: "#f2d1a8",
    point: "#202ba2",
    white: "#fff"
  }
};

function App() {
  const { setScrollY } = useScroll();
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Header />
        <ProjectGrid />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
