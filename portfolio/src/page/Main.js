import React, { useLayoutEffect } from "react";
import Header from "../component/Header";
import ProjectGrid from "../component/ProjectGrid";
import { useScroll } from "../ScrollContext";

function Main() {
  const { setScrollY } = useScroll();
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Header />
      <ProjectGrid />
    </>
  );
}

export default Main;
