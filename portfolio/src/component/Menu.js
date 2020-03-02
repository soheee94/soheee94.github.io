import React from "react";
import styled, { keyframes } from "styled-components";

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Block = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: ${show} ease 0.3s;

  div {
    padding: 0 30px;
  }
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

function Menu({ onMouseOut }) {
  return (
    <Block onMouseOut={onMouseOut}>
      <div>
        <MenuItem>About</MenuItem>
        <MenuItem>Works</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
    </Block>
  );
}

export default Menu;
