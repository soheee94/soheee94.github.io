import React from "react";
import styled, { css } from "styled-components";
import palette from "../../utils/palette";
import media from "../../utils/media";
import logo from "../../asset/logo.png";

function MainSideBar() {
  return (
    <>
      <FloatingLogo>
        <img src={logo} alt="logo" />
      </FloatingLogo>
      <Introduce>
        <h1>
          LuLuLa
          <br />
          LuLuLa
          {/* WEB Front-End
          <br />
          개발자 한소희 입니다. */}
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
      </Introduce>
    </>
  );
}

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const FloatingLogo = styled.div`
  width: inherit;
  z-index: 3;
  position: fixed;
  background: inherit;
  top: 0;
  left: 0;
  padding: 3rem;

  ${media.medium} {
    padding: 2rem;
  }
  ${media.small} {
    padding: 25px 20px;
  }

  img {
    width: 48px;
    cursor: pointer;
  }
`;

const Introduce = styled.div`
  color: ${palette.point};
  margin-bottom: 4rem;
  ${ScrollAnimationStyles}

  ${media.medium} {
    margin: 0;
    padding: 0 2rem;
  }
  ${media.small} {
    padding-top: 98px;
    padding-bottom: 40px;
    width: 100%;
  }
`;

export default MainSideBar;
