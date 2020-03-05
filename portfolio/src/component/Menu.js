import React from "react";
import styled, { css } from "styled-components";
import media from "../utils/media";

function transitionTimer() {
  let styles = "";

  for (let i = 0; i < 3; i++) {
    styles += `
      &:nth-of-type(${i + 1}) {
        transition-delay: ${0.25 * i}s;
       }
     `;
  }

  return css`
    ${styles}
  `;
}

const Block = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;

  /* mobile */
  ${media.medium} {
    position: fixed;
  }

  div {
    padding: 0 30px;
    ${media.medium} {
      width: 100%;
      text-align: center;
    }
  }

  ${props =>
    props.openMenu &&
    css`
      opacity: 1;
      visibility: visible;

      ${MenuItem} {
        opacity: 1;
        transform: translateX(0) translateZ(0);
        ${transitionTimer()};
      }
    `}
`;

const MenuItem = styled.a`
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: "Roboto";
  display: block;
  letter-spacing: 0.15em;
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateX(-200px) translateZ(-1000px);
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.point};
  }
`;

function Menu({ openMenu }) {
  return (
    <Block openMenu={openMenu}>
      <div>
        <MenuItem>About</MenuItem>
        <MenuItem>Works</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
    </Block>
  );
}

export default Menu;
