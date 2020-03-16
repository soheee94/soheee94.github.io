import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/style/palette";
import media from "../../lib/style/media";
import { FaExternalLinkAlt } from "react-icons/fa";

function WorkDetail({ category, data }) {
  return (
    <Block>
      <Category>{category}</Category>
      {data.map(({ title, description }) => (
        <div key={title}>
          <Title>
            <h2>{title}</h2>
          </Title>
          <DescriptionList>
            {description.map((text, index) => {
              const isLandingPage = text.includes("홈페이지 바로가기");
              return (
                <Description key={index} isLandingPage={isLandingPage}>
                  {isLandingPage ? (
                    <span onClick={() => window.open(text.split("-")[1])}>
                      {"홈페이지 바로가기"}
                      <FaExternalLinkAlt />
                    </span>
                  ) : (
                    text
                  )}
                </Description>
              );
            })}
          </DescriptionList>
        </div>
      ))}
    </Block>
  );
}
const Block = styled.div`
  & > div {
    /* display: flex; */
    &:nth-of-type(2) {
      margin-top: 1rem;
    }
    ${media.medium} {
      display: block;
    }
  }
  margin-top: 3rem;
`;

const Category = styled.h4`
  color: #ffae4a;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  /* flex: 0 0 180px; */
  color: ${palette.point};
  margin-bottom: 1rem;
  h2 {
    line-height: 2rem;
  }
`;
const DescriptionList = styled.ul`
  list-style: none;
  color: ${palette.sub};
  padding-left: 1rem;
`;

const Description = styled.li`
  margin-bottom: 8px;
  &::before {
    content: "\\2022";
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
  span {
    display: inline-flex;
    align-items: center;
  }
  /* ExternalLink icon */
  svg {
    margin-left: 0.375rem;
  }
  ${props =>
    props.isLandingPage &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export default WorkDetail;
