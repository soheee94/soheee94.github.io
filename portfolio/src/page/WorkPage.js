import React, { useEffect } from "react";
import PageTemplate from "../component/common/PageTemplate";
import WorkSideBar from "../component/work/WorkSideBar";
import { useScroll } from "../ScrollContext";

function WorkPage({ match }) {
  const { title } = match.params;
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
        <WorkSideBar />
      </PageTemplate.Left>
      <PageTemplate.Right>{title}</PageTemplate.Right>
    </PageTemplate>
  );
}

export default WorkPage;
