import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import logo from "../../asset/logo.png";
import { useHistory } from "react-router-dom";

function FloatingLogo() {
  const history = useHistory();
  return (
    <FloatingLogoBlock>
      <img src={logo} alt="logo" onClick={() => history.push(`/`)} />
    </FloatingLogoBlock>
  );
}

const FloatingLogoBlock = styled.div`
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

export default FloatingLogo;
