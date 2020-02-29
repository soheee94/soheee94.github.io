import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  padding: 60px 40px;
  z-index: 2;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
`;

function Header() {
  return <HeaderBlock>Portfolio</HeaderBlock>;
}

export default Header;
