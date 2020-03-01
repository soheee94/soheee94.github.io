import React from "react";
import styled, { css } from "styled-components";
import { useScroll } from "../ScrollContext";
import media from "../utils/media";

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const Block = styled.header`
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    padding: 60px;
    /* 스크롤 애니메이션 효과 */
    ${ScrollAnimationStyles}
    ${media.small} {
      padding: 25px 20px;
    }
  }

  /* scroll animation (not mobile) */
  @media (min-width: 1024px) {
    ${props =>
      props.scrollY > 3 &&
      css`
      width: 176px;
      ${MenuButton}, ${HeaderContent},${Footer} {
        visibility: hidden;
        opacity: 0;
        transition-delay: 0s;
      }
    `}
  }

  /* mobile */
  ${media.medium} {
    width: 100%;
    position: relative;
    padding: 0;
  }
`;

const FloatingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.medium} {
    position: fixed;
    background: inherit;
    z-index: 11;
  }
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
`;

const HeaderContent = styled.div`
  padding: 0 30px;
  font-size: 25px;
  font-weight: 700;

  p {
    padding: 0 60px;
  }

  ${media.medium} {
    padding-top: 176px;
  }
  ${media.small} {
    padding-top: 106px;
  }
`;

const Footer = styled.div``;

function Header() {
  const { scrollY } = useScroll();
  return (
    <Block scrollY={scrollY}>
      <FloatingBlock>
        <Logo />
        <MenuButton />
      </FloatingBlock>
      <HeaderContent>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </HeaderContent>
      <Footer>© SORE, 2020</Footer>
    </Block>
  );
}

export default Header;
