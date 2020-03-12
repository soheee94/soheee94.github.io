import React from "react";
import styled, { css } from "styled-components";
import { useScroll, useHeader } from "../ScrollContext";
import media from "../lib/style/media";
// import Menu from "./Menu";
import logo from "../asset/logo.png";

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const Block = styled.header`
  background: ${props => props.theme.main};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  ${props => {
    if (props.scrollY > 3 && !props.openHeader) {
      return css`
        width: calc(6rem + 48px);
        ${media.medium} {
          width: calc(4rem + 48px);
        }
        ${HeaderContent} {
          visibility: hidden;
          opacity: 0;
          transition-delay: 0s;
        }
      `;
    }
  }}

  ${media.small} {
    justify-content: flex-start;
    width: 100%;
    position: relative;
    padding: 0;
  }
`;
const FloatingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  align-items: center;
  z-index: 11;
  position: fixed;
  background: inherit;
  top: 0;
  padding: 3rem;
  ${media.medium} {
    padding: 2rem;
  }
  ${media.small} {
      padding: 25px 20px;
    }
  /* ${props =>
    props.openMenu &&
    css`
      background: none;
    `} */
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const HeaderContent = styled.div`
  ${ScrollAnimationStyles}
  color : ${props => props.theme.point};
  /* margin-left : -1rem; */
  margin-bottom : 4rem;
  ${media.medium} {
    margin : 0;
    padding: 0 2rem;
  }
  ${media.small} {
    padding-top: 98px;
    padding-bottom: 40px;
  }

`;

function Header() {
  const { scrollY } = useScroll();
  const { openHeader, setOpenHeader } = useHeader();
  // const [openMenu, setOpenMenu] = useState(false);
  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     if (!openHeader) setOpenMenu(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const onMouseLeave = () => {
    setOpenHeader(false);
    // if (scrollY > 3) {
    //   setOpenMenu(false);
    // }
  };
  return (
    <Block
      scrollY={scrollY}
      openHeader={openHeader}
      onMouseOver={() => {
        setOpenHeader(true);
      }}
      onMouseLeave={onMouseLeave}
    >
      <FloatingBlock>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </FloatingBlock>
      <HeaderContent>
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
      </HeaderContent>
      {/* <Menu openMenu={openMenu} /> */}
    </Block>
  );
}

export default Header;
