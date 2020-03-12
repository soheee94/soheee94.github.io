import React, { useState } from "react";
import styled from "styled-components";
import media from "../../utils/media";
import logo from "../../asset/logo.png";
import logo_hover from "../../asset/logo_hover.png";
import { useHistory } from "react-router-dom";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import palette from "../../utils/palette";
import { IoIosMail, IoLogoGithub } from "react-icons/io";

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
      <div className="icons">
        <IoLogoGithub onClick={() => window.open("https://github.com/soheee94")} />
        <IoIosMail onClick={() => (window.location.href = "mailto:hsh8616@naver.com")} />
      </div>
    </FloatingLogoBlock>
  );
}

const FloatingLogoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  z-index: 3;
  position: fixed;
  background: inherit;
  top: 0;
  left: 0;
  padding: 3rem;
  color: white;

  ${media.xlarge} {
    padding: 2rem;
  }
  ${media.medium} {
    padding: 25px 2rem;
  }

  img {
    width: 48px;
    cursor: pointer;
  }

  .icons {
    visibility: visible;
    opacity: 1;
    transition: all 0.15s ease;
    transition-delay: 0.5s;
  }

  svg {
    font-size: 1.25rem;
    margin-left: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      color: ${palette.point};
    }
  }
`;

export default React.memo(FloatingLogo);
