import React from "react";
import styled, { css } from "styled-components";

const Block = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;

  div {
    padding: 0 30px;
  }

  ${props =>
    props.openMenu &&
    css`
      opacity: 1;
      visibility: visible;
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
