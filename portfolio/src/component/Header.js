import React from "react";
import styled, { css } from "styled-components";
import { useScroll } from "../ScrollContext";
import media from "../utils/media";

const Block = styled.header`
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  padding: 60px 40px;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props =>
    props.scrollY > 3 &&
    css`
      width: 140px;
      ${MenuButton}, ${HeaderContent},${Footer} {
        visibility: hidden;
        opacity: 0;
        transition-delay: 0s;
      }
    `}

  ${media.small} {
    width: 100%;
  }
`;

const FloatingBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: ${props => props.theme.point};
`;

const MenuButton = styled.div`
  width: 56px;
  height: 56px;
  background: white;
  /* 스크롤 애니메이션 효과 */
  ${ScrollAnimationStyles}
`;

const HeaderContent = styled.p`
  padding: 0 20px;
  font-size: 25px;
  font-weight: 700;

  /* 스크롤 애니메이션 효과 */
  ${ScrollAnimationStyles}
`;

const Footer = styled.div`
  /* 스크롤 애니메이션 효과 */
  ${ScrollAnimationStyles}
`;

function Header() {
  const { scrollY } = useScroll();
  return (
    <Block scrollY={scrollY}>
      <FloatingBlock>
        <Logo />
        <MenuButton />
      </FloatingBlock>
      <HeaderContent>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </HeaderContent>
      <Footer>© SORE, 2020</Footer>
    </Block>
  );
}

export default Header;
