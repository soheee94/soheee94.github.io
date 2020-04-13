import React, { useRef } from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/style/palette";
import media from "../../lib/style/media";
import { FaExternalLinkAlt } from "react-icons/fa";
import useLazyImageObserver from "../../lib/useLazyImageObserver";

function WorkDetail({ category, data, image }) {
  return (
    <Block>
      <Category>{category}</Category>
      {image ? <WorkDetailImageList data={data} /> : <WorkDetailDescriptionList data={data} />}
    </Block>
  );
}

const WorkDetailDescriptionList = ({ data }) => {
  return data.map(({ title, description }) => (
    <div key={title}>
      <Title>
        <h2>{title}</h2>
      </Title>
      <DescriptionList>
        {description.map((text, index) => {
          const isLandingPage = text.includes("바로가기");
          return (
            <Description key={index} isLandingPage={isLandingPage}>
              {isLandingPage ? (
                <span onClick={() => window.open(text.split("-")[1])}>
                  {text.split("-")[0]}
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
  ));
};

const WorkDetailImageList = ({ data }) => {
  const { folder, files } = data;
  return files.map((file, index) => <WorkDetailImage file={file} key={index} folder={folder} />);
};

const WorkDetailImage = ({ file, folder }) => {
  const target = useRef(null);
  useLazyImageObserver(target);
  return (
    <img
      ref={target}
      data-src={require(`../../asset/images/${folder}/${file}`)}
      alt="실행 화면 이미지"
    />
  );
};

const Block = styled.div`
  & > div {
    /* display: flex; */
    &:nth-of-type(2) {
      margin-top: 1rem;
    }
  }
  margin-top: 3rem;
  &:first-of-type {
    margin-top: 2rem;
    ${media.medium} {
      margin-top: 0;
    }
  }

  /* image */
  img {
    display: block;
    max-width: fit-content;
    width: 70%;
    margin-bottom: 1rem;
    ${media.medium} {
      width: 100%;
    }
  }
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

WorkDetail.defaultProps = {
  image: false
};

export default WorkDetail;
