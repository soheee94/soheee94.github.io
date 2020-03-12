import React, { useState } from "react";
import styled from "styled-components";
import media from "../../utils/media";
import logo from "../../asset/logo.png";
import logo_hover from "../../asset/logo_hover.png";
import { useHistory } from "react-router-dom";

function FloatingLogo() {
  const history = useHistory();
  const [imageSrc, setImageSrc] = useState(logo);
  return (
    <FloatingLogoBlock>
      <img
        src={imageSrc}
        alt="logo"
        onClick={() => history.push(`/`)}
        onMouseOver={() => setImageSrc(logo_hover)}
        onMouseLeave={() => setImageSrc(logo)}
      />
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
    padding: 25px 2rem;
  }

  img {
    width: 48px;
    cursor: pointer;
  }
`;

export default React.memo(FloatingLogo);
