import React, { useState } from "react";
import styled from "styled-components";
import media from "../../lib/style/media";
import logo from "../../asset/logo.png";
import logo_hover from "../../asset/logo_hover.png";
import { useHistory } from "react-router-dom";
import palette from "../../lib/style/palette";
import { IoIosMail, IoLogoGithub } from "react-icons/io";

function FloatingLogo() {
  const history = useHistory();
  const [imageSrc, setImageSrc] = useState(logo);
  return (
    <FloatingLogoBlock>
      <img
        src={imageSrc}
        alt="logo"
        onClick={() => history.goBack()}
        onMouseOver={() => setImageSrc(logo_hover)}
        onMouseLeave={() => setImageSrc(logo)}
      />
      <div className="icons">
        <div onClick={() => window.open("https://github.com/soheee94")}>
          <IoLogoGithub />
          <span>Github</span>
        </div>
        <div
          onClick={() => (window.location.href = "mailto:hsh8616@naver.com")}
        >
          <IoIosMail />
          <span>Mail</span>
        </div>
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
  height: calc(6rem + 48px);

  ${media.xlarge} {
    padding: 2rem;
    height: calc(4rem + 48px);
  }
  ${media.medium} {
    padding: 25px 2rem;
    height: calc(50px + 48px);
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
    color: #796b62;
    display: flex;
    align-items: center;

    div {
      padding: 0 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.25s ease;
      position: relative;
      &:last-of-type {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          height: 50%;
          width: 1px;
          border-left: 1px solid #796b62;
          margin: 0 auto;
        }
        padding-right: 0;
      }

      &:hover {
        color: ${palette.point};
      }

      svg {
        font-size: 1.625rem;
        margin-right: 0.25rem;
      }

      span {
        font-size: 0.875rem;
        letter-spacing: -0.025rem;
      }
    }
  }
`;

export default React.memo(FloatingLogo);
