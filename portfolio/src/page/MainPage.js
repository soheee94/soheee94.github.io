import React, { useEffect } from "react";
// import Header from "../component/Header";
// import ProjectGrid from "../component/ProjectGrid";
import { useScroll } from "../ScrollContext";
import MainTemplate from "../component/main/MainTemplate";
import MainSideBar from "../component/main/MainSideBar";
import MainProjectContainer from "../container/main/MainProjectContainer";

function MainPage() {
  // set scroll Y position
  const { setScrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <MainTemplate>
      <MainTemplate.Left>
        <MainSideBar />
      </MainTemplate.Left>
      <MainTemplate.Right>
        <MainProjectContainer />
      </MainTemplate.Right>
    </MainTemplate>
  );
}

export default MainPage;
