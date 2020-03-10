import React from "react";
import FloatingLogo from "../common/FloatingLogo";
import SideBarContent from "../common/SideBarContent";

function MainSideBar() {
  return (
    <>
      <FloatingLogo />
      <SideBarContent>
        <h1>
          WEB Front-End
          <br />
          개발자 한소희 입니다.
        </h1>
        <p>
          다른 사람에게 부끄럽지 않은
          <br />
          프로그램을 만들기 위해 노력하며,
          <br />
          문제를 코드로 해결하는 것을 즐깁니다. <br />
          UI/UX 트렌드에도 항상 관심을 가지며,
          <br />
          디자인을 생각한 소스코드를 작성합니다.
        </p>
      </SideBarContent>
    </>
  );
}

export default React.memo(MainSideBar);
