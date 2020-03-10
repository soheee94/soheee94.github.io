import React, { useEffect } from "react";
import { useScroll } from "../ScrollContext";
import MainSideBar from "../component/main/MainSideBar";
import MainWorkContainer from "../container/main/MainWorkContainer";
import PageTemplate from "../component/common/PageTemplate";

function MainPage() {
  // set scroll Y position
  const { setScrollY } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return (
    <PageTemplate>
      <PageTemplate.Left>
        <MainSideBar />
      </PageTemplate.Left>
      <PageTemplate.Right>
        <MainWorkContainer />
      </PageTemplate.Right>
    </PageTemplate>
  );
}

export default MainPage;
