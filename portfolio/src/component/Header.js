import React, { useState, useLayoutEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useScroll, useHeader } from "../ScrollContext";
import media from "../utils/media";
import Menu from "./Menu";

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
  z-index: 2;
  & > * {
    padding: 60px;

    ${media.small} {
      padding: 25px 20px;
    }
  }

  /* scroll animation (not mobile) */
  @media (min-width: 1024px) {
    ${props => {
      if (props.scrollY > 3 && !props.openHeader) {
        return css`
            width: 176px;
            ${MenuButton}, ${HeaderContent},${Footer} {
              visibility: hidden;
              opacity: 0;
              transition-delay: 0s;
            }
          `;
      }
    }}
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
  align-items: center;
  z-index: 11;
  ${media.medium} {
    position: fixed;
    background: inherit;
    ${props =>
      props.openMenu &&
      css`
        background: none;
      `}
  }

  /* hamburger menu test */
  body {
    background-color: #333;
  }
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: ${props => props.theme.white};
  cursor: pointer;
`;

const lineUp = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const MenuButton = styled.div`
  ${ScrollAnimationStyles}
  width: 26px;
  height: 17px;
  cursor: pointer;
  position: relative;
  &:before,
  &:after,
  span {
    background-color: #fff;
    content: "";
    display: block;
    height: 3px;
    transition: all 200ms ease-in-out;
  }
  &:before {
    margin-bottom: 11px;
    animation: ${lineUp} ease 1s infinite 1s alternate;
  }

  span {
    width: 100%;
    position: absolute;
    top: 7px;
    animation: ${lineUp} ease 1.4s infinite 0.6s alternate;
  }

  &:after {
    animation: ${lineUp} ease 1.8s infinite 0.2s alternate;
  }

  /* hover animation */
  &:hover {
    &:before,
    &:after,
    span {
      background-color: ${props => props.theme.point};
    }
  }

  ${media.medium} {
    &:hover {
      &:before,
      &:after,
      span {
        background-color: white;
      }
    }
  }

  /* close button */
  ${props =>
    props.openMenu &&
    css`
      &:before,
      &:after,
      span {
        animation: none;
      }
      &:before {
        transform: translateY(7px) rotate(45deg);
      }
      &:after {
        transform: translateY(-7px) rotate(-45deg);
      }
      span {
        background: none !important;
      }
    `}
`;

const HeaderContent = styled.div`
  padding: 0 30px;
  font-size: 25px;
  font-weight: 700;
  ${ScrollAnimationStyles}
  color : ${props => props.theme.point};
  p {
    padding: 0 60px;
  }

  ${media.medium} {
    padding-top: 176px;
    padding-bottom: 60px;
  }
  ${media.small} {
    padding-top: 130px;
    padding-bottom: 60px;
    p {
      padding: 0 20px;
    }
  }
`;

const Footer = styled.div`
  ${ScrollAnimationStyles}
  z-index: 11;
  ${media.medium} {
    display: none;
  }
`;

function Header() {
  const { scrollY } = useScroll();
  const { openHeader, setOpenHeader } = useHeader();
  const [openMenu, setOpenMenu] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!openHeader) setOpenMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const onMouseLeave = () => {
    setOpenHeader(false);
    if (scrollY > 3) {
      setOpenMenu(false);
    }
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
      <FloatingBlock openMenu={openMenu}>
        <Logo />
        <MenuButton onClick={() => setOpenMenu(!openMenu)} openMenu={openMenu}>
          <span></span>
        </MenuButton>
      </FloatingBlock>
      <HeaderContent>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </HeaderContent>
      <Footer></Footer>
      <Menu openMenu={openMenu} />
    </Block>
  );
}

export default Header;
