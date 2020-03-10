import React, { useEffect } from "react";
// import Header from "../component/Header";
// import ProjectGrid from "../component/ProjectGrid";
import { useScroll } from "../ScrollContext";
import MainTemplate from "../component/main/MainTemplate";
import MainSideBar from "../component/main/MainSideBar";
import MainWorkContainer from "../container/main/MainWorkContainer";

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
        <MainWorkContainer />
      </MainTemplate.Right>
    </MainTemplate>
  );
}

export default MainPage;
