import React from "react";
import styled, { keyframes, css } from "styled-components";
import media from "../utils/media";

const lineUp = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const MenuButtonBlock = styled.div`
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

function MenuButton({ openMenu, setOpenMenu }) {
  return (
    <MenuButtonBlock onClick={() => setOpenMenu(!openMenu)} openMenu={openMenu}>
      <span></span>
    </MenuButtonBlock>
  );
}

export default MenuButton;
